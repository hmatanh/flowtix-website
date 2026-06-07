"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import {
  IconSearch,
  IconHeart,
  IconShoppingBag,
  IconX,
  IconArrowLeft,
  IconCheck,
  IconPlus,
  IconMinus,
} from "@tabler/icons-react";
import {
  ORANGE,
  TEXT_BRAND,
  TEXT_DIM,
  TEXT_FAINT,
  SURFACE,
  SURFACE_CARD,
  SHELL,
  BORDER,
  PRODUCTS,
  PRODUCT_COLORS,
  type Product,
} from "./_shared";
import { ProductSilhouette } from "./ProductSilhouette";

type Page = "home" | "product" | "collection" | "cart";

type CartItem = {
  product: Product;
  size: string;
  color: string;
  qty: number;
};

const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];

const COLLECTION_FILTERS = ["All", "Jackets", "Packs", "Bottoms", "Base Layers", "Accessories"];

export function DrftStore() {
  const [page, setPage] = useState<Page>("home");
  const [selectedProduct, setSelectedProduct] = useState<Product>(PRODUCTS[0]);
  const [selectedColor, setSelectedColor] = useState("navy");
  const [selectedSize, setSelectedSize] = useState("M");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [toast, setToast] = useState<string | null>(null);

  const cartCount = cartItems.reduce((s, i) => s + i.qty, 0);
  const subtotal = cartItems.reduce((s, i) => s + i.product.price * i.qty, 0);

  function showToast(msg: string) {
    setToast(msg);
    window.setTimeout(() => setToast(null), 2200);
  }

  function openProduct(p: Product) {
    setSelectedProduct(p);
    setAddedToCart(false);
    setPage("product");
  }

  function addToCart() {
    const item: CartItem = {
      product: selectedProduct,
      size: selectedSize,
      color: selectedColor,
      qty: 1,
    };
    setCartItems((prev) => [...prev, item]);
    setAddedToCart(true);
  }

  function changeQty(index: number, delta: number) {
    setCartItems((prev) =>
      prev
        .map((it, i) => (i === index ? { ...it, qty: it.qty + delta } : it))
        .filter((it) => it.qty > 0),
    );
  }

  function removeItem(index: number) {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div className="relative h-full min-h-[420px] sm:min-h-[560px] flex flex-col" style={{ background: SHELL }}>
      {/* ===== TOP NAV ===== */}
      <header
        className="flex items-center justify-between gap-3 px-4 sm:px-6 py-4 border-b shrink-0"
        style={{ background: SURFACE, borderColor: BORDER }}
      >
        <button
          type="button"
          onClick={() => {
            setPage("home");
            setCartOpen(false);
          }}
          className="text-white text-xl font-black italic tracking-tight"
        >
          DRFT
        </button>

        <nav
          className="hidden md:flex items-center gap-6 text-[10px] tracking-[0.18em] uppercase"
          style={{ color: TEXT_DIM }}
        >
          <button type="button" onClick={() => setPage("collection")} className="hover:text-white transition-colors">
            Shop
          </button>
          <button type="button" onClick={() => setPage("collection")} className="hover:text-white transition-colors">
            Collections
          </button>
          <button type="button" className="hover:text-white transition-colors">
            Stories
          </button>
          <button type="button" className="hover:text-white transition-colors">
            About
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <button type="button" aria-label="Search" style={{ color: TEXT_DIM }}>
            <IconSearch size={15} stroke={1.8} />
          </button>
          <button type="button" aria-label="Wishlist" style={{ color: TEXT_DIM }} className="hidden sm:block">
            <IconHeart size={15} stroke={1.8} />
          </button>
          <button
            type="button"
            onClick={() => setCartOpen(true)}
            aria-label={`Cart (${cartCount})`}
            className="relative text-white"
          >
            <IconShoppingBag size={16} stroke={1.8} />
            {cartCount > 0 && (
              <span
                className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-black text-black"
                style={{ background: ORANGE }}
              >
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* ===== CART OVERLAY ===== */}
      <AnimatePresence>
        {cartOpen && (
          <m.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.28, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="absolute right-0 top-0 h-full w-full sm:w-80 z-40 border-l flex flex-col"
            style={{ background: SURFACE, borderColor: BORDER, boxShadow: "0 0 60px rgba(0,0,0,0.7)" }}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b" style={{ borderColor: BORDER }}>
              <div className="text-white text-sm font-bold">Your Cart ({cartCount})</div>
              <button type="button" onClick={() => setCartOpen(false)} aria-label="Close cart" style={{ color: TEXT_DIM }}>
                <IconX size={16} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              {cartItems.length === 0 ? (
                <div className="text-center py-10">
                  <div className="text-sm" style={{ color: TEXT_DIM }}>
                    Your cart is empty.
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setCartOpen(false);
                      setPage("collection");
                    }}
                    className="text-xs mt-3"
                    style={{ color: ORANGE }}
                  >
                    Keep shopping →
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {cartItems.map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-3 rounded-xl p-3"
                      style={{ background: SHELL, border: `1px solid ${BORDER}` }}
                    >
                      <div className="w-14 h-14 rounded-lg flex items-center justify-center shrink-0" style={{ background: SURFACE_CARD }}>
                        <ProductSilhouette kind={item.product.kind} colorId={item.color} size="sm" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-white text-xs font-bold truncate">{item.product.name}</div>
                        <div className="text-[10px]" style={{ color: TEXT_DIM }}>
                          Size {item.size} · {PRODUCT_COLORS.find((c) => c.id === item.color)?.label ?? item.color}
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-1">
                            <button
                              type="button"
                              onClick={() => changeQty(i, -1)}
                              className="w-5 h-5 rounded flex items-center justify-center"
                              style={{ background: SURFACE_CARD, color: TEXT_BRAND }}
                              aria-label="Decrease quantity"
                            >
                              <IconMinus size={9} stroke={2.5} />
                            </button>
                            <span className="text-[10px] text-white tabular-nums w-5 text-center">{item.qty}</span>
                            <button
                              type="button"
                              onClick={() => changeQty(i, 1)}
                              className="w-5 h-5 rounded flex items-center justify-center"
                              style={{ background: SURFACE_CARD, color: TEXT_BRAND }}
                              aria-label="Increase quantity"
                            >
                              <IconPlus size={9} stroke={2.5} />
                            </button>
                          </div>
                          <div className="text-xs font-bold" style={{ color: ORANGE }}>
                            ${item.product.price * item.qty}
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(i)}
                        aria-label="Remove"
                        className="text-[10px] self-start"
                        style={{ color: TEXT_DIM }}
                      >
                        <IconX size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {cartItems.length > 0 && (
              <div className="border-t p-4" style={{ borderColor: BORDER }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] uppercase tracking-wider" style={{ color: TEXT_DIM }}>
                    Subtotal
                  </span>
                  <span className="text-white text-sm font-black tabular-nums">${subtotal}.00</span>
                </div>
                <button
                  type="button"
                  onClick={() => showToast("This would go to Stripe!")}
                  className="w-full py-3.5 rounded-xl text-sm font-black text-black"
                  style={{ background: ORANGE }}
                >
                  Checkout →
                </button>
                <div className="text-[9px] text-center mt-2" style={{ color: TEXT_FAINT }}>
                  Stripe-powered · Secure
                </div>
              </div>
            )}
          </m.aside>
        )}
      </AnimatePresence>

      {/* ===== MAIN CONTENT ===== */}
      <main className="flex-1 overflow-y-auto">
        <AnimatePresence mode="wait">
          {page === "home" && (
            <m.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
              <Hero onShop={() => setPage("collection")} />
              <FeaturedGrid onOpen={openProduct} onViewAll={() => setPage("collection")} />
              <InstaStrip />
            </m.div>
          )}
          {page === "collection" && (
            <m.div key="collection" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
              <div className="px-4 sm:px-6 pt-5">
                <button type="button" onClick={() => setPage("home")} className="text-xs inline-flex items-center gap-1" style={{ color: TEXT_DIM }}>
                  <IconArrowLeft size={11} stroke={2} />
                  Home
                </button>
                <h3 className="text-white text-2xl font-black italic mt-3">ALL GEAR</h3>
              </div>
              <div className="flex gap-1.5 px-4 sm:px-6 mt-3 overflow-x-auto pb-1">
                {COLLECTION_FILTERS.map((f) => {
                  const active = activeFilter === f;
                  return (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setActiveFilter(f)}
                      className="shrink-0 rounded-full px-3 py-1 text-[11px] font-medium border"
                      style={{
                        background: active ? ORANGE : "transparent",
                        color: active ? "#000" : TEXT_DIM,
                        borderColor: active ? ORANGE : BORDER,
                      }}
                    >
                      {f}
                    </button>
                  );
                })}
              </div>
              <div className="grid grid-cols-2 gap-3 px-4 sm:px-6 pt-4 pb-6">
                {PRODUCTS.map((p) => (
                  <ProductCard key={p.id} product={p} onClick={() => openProduct(p)} />
                ))}
              </div>
            </m.div>
          )}
          {page === "product" && (
            <m.div
              key="product"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="px-4 sm:px-6 py-5"
            >
              <button
                type="button"
                onClick={() => {
                  setPage("home");
                  setAddedToCart(false);
                }}
                className="text-xs inline-flex items-center gap-1"
                style={{ color: TEXT_DIM }}
              >
                <IconArrowLeft size={11} stroke={2} />
                Back
              </button>

              <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-5 mt-3">
                <div>
                  <div
                    className="rounded-2xl flex items-center justify-center h-64"
                    style={{ background: SURFACE_CARD }}
                  >
                    <ProductSilhouette kind={selectedProduct.kind} colorId={selectedColor} size="lg" />
                  </div>
                  <div className="flex gap-2 justify-center mt-3">
                    {PRODUCT_COLORS.map((c) => {
                      const active = selectedColor === c.id;
                      return (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => setSelectedColor(c.id)}
                          className="w-6 h-6 rounded-full"
                          style={{
                            background: c.hex,
                            border: `2px solid ${active ? "#fff" : "transparent"}`,
                          }}
                          aria-label={c.label}
                        />
                      );
                    })}
                  </div>
                </div>

                <div>
                  <h3 className="text-white text-xl font-black italic">{selectedProduct.name}</h3>
                  <div className="text-xs mt-1" style={{ color: TEXT_DIM }}>
                    {selectedProduct.subtitle} · 4 colorways
                  </div>
                  <div className="font-black mt-3 tabular-nums" style={{ color: ORANGE, fontSize: "clamp(24px, 4vw, 30px)" }}>
                    ${selectedProduct.price}.00
                  </div>

                  <div className="text-[10px] uppercase tracking-wider mt-5" style={{ color: TEXT_DIM }}>
                    Size
                  </div>
                  <div className="flex gap-1.5 flex-wrap mt-2">
                    {SIZES.map((sz) => {
                      const active = selectedSize === sz;
                      return (
                        <button
                          key={sz}
                          type="button"
                          onClick={() => setSelectedSize(sz)}
                          className="w-10 h-10 border rounded-lg text-xs flex items-center justify-center"
                          style={{
                            background: active ? "rgba(220, 38, 38,0.10)" : "transparent",
                            borderColor: active ? ORANGE : BORDER,
                            color: active ? "#fff" : TEXT_DIM,
                          }}
                        >
                          {sz}
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {["Water-resistant", "Packable", "Trail-tested", "Machine washable"].map((t) => (
                      <span
                        key={t}
                        className="rounded-full px-2.5 py-1 text-[10px]"
                        style={{
                          background: SURFACE_CARD,
                          border: `1px solid ${BORDER}`,
                          color: TEXT_BRAND,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {!addedToCart ? (
                    <button
                      type="button"
                      onClick={addToCart}
                      className="mt-5 w-full py-3.5 rounded-xl text-sm font-black text-black"
                      style={{ background: ORANGE }}
                    >
                      ADD TO CART — ${selectedProduct.price}.00
                    </button>
                  ) : (
                    <m.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
                      <div
                        className="mt-5 w-full py-3.5 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2"
                        style={{ background: "#059669" }}
                      >
                        <IconCheck size={14} stroke={3} />
                        Added to Cart
                      </div>
                      <button
                        type="button"
                        onClick={() => setCartOpen(true)}
                        className="text-xs cursor-pointer text-center w-full mt-2"
                        style={{ color: ORANGE }}
                      >
                        View Cart →
                      </button>
                    </m.div>
                  )}
                  <div className="text-[10px] text-center mt-2" style={{ color: TEXT_DIM }}>
                    Free shipping on orders over $150
                  </div>
                </div>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </main>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-3 left-3 right-3 sm:left-auto sm:right-5 sm:bottom-5 sm:max-w-xs rounded-xl px-3.5 py-2 text-[11px] font-medium flex items-center gap-2 shadow-2xl z-50"
            style={{ background: SURFACE_CARD, border: `1px solid ${ORANGE}66`, color: ORANGE }}
          >
            <IconCheck size={12} stroke={3} />
            {toast}
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ============ Subcomponents ============ */

function Hero({ onShop }: { onShop: () => void }) {
  return (
    <section
      className="relative px-4 sm:px-6 pt-10 pb-8 overflow-hidden"
      style={{ background: SURFACE }}
    >
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: 320,
          height: 400,
          background: "radial-gradient(ellipse at 70% 30%, rgba(220, 38, 38,0.10) 0%, transparent 70%)",
        }}
      />
      <div className="relative">
        <div className="text-[10px] tracking-[0.3em] uppercase font-medium" style={{ color: ORANGE }}>
          New Season
        </div>
        <h2
          className="font-black italic text-white mt-2"
          style={{
            fontSize: "clamp(28px, 6vw, 48px)",
            lineHeight: 0.95,
            transform: "skewX(-3deg)",
            transformOrigin: "left",
            letterSpacing: "-0.02em",
          }}
        >
          GEAR THAT MOVES<br />WITH YOU.
        </h2>
        <div className="text-sm mt-3" style={{ color: TEXT_BRAND }}>
          Trail-tested. City-approved.
        </div>
        <div className="flex flex-wrap gap-2 mt-5">
          <button
            type="button"
            onClick={onShop}
            className="px-5 py-2.5 text-xs font-black text-black"
            style={{ background: ORANGE }}
          >
            SHOP NOW →
          </button>
          <button
            type="button"
            className="px-5 py-2.5 text-xs font-medium"
            style={{ border: `1px solid ${TEXT_DIM}`, color: TEXT_DIM }}
          >
            OUR STORY
          </button>
        </div>
      </div>
    </section>
  );
}

function FeaturedGrid({ onOpen, onViewAll }: { onOpen: (p: Product) => void; onViewAll: () => void }) {
  return (
    <section className="px-4 sm:px-6 pt-7 pb-5">
      <div className="flex items-center justify-between mb-4">
        <div className="text-[10px] tracking-[0.2em] uppercase" style={{ color: TEXT_DIM }}>
          Featured Gear
        </div>
        <button type="button" onClick={onViewAll} className="text-[10px]" style={{ color: ORANGE }}>
          View All →
        </button>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {PRODUCTS.slice(0, 4).map((p) => (
          <ProductCard key={p.id} product={p} onClick={() => onOpen(p)} />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product, onClick }: { product: Product; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-left rounded-xl overflow-hidden hover:scale-[1.02] transition-transform"
      style={{ background: SURFACE }}
    >
      <div
        className="relative h-32 flex items-center justify-center"
        style={{ background: SURFACE_CARD }}
      >
        <ProductSilhouette kind={product.kind} colorId="orange" size="sm" />
        {product.badge === "selling" && (
          <span
            className="absolute top-2 left-2 rounded-full px-2 py-0.5 text-[9px] font-medium"
            style={{ background: "rgba(0,0,0,0.65)", color: ORANGE }}
          >
            🔥 Selling fast
          </span>
        )}
        {product.badge === "new" && (
          <span
            className="absolute top-2 right-2 rounded-full px-2 py-0.5 text-[9px] font-black text-black"
            style={{ background: ORANGE }}
          >
            NEW
          </span>
        )}
        {product.badge === "low" && (
          <span
            className="absolute top-2 right-2 rounded-full px-2 py-0.5 text-[9px] font-medium"
            style={{ background: "rgba(0,0,0,0.65)", color: ORANGE }}
          >
            ⚡ Low stock
          </span>
        )}
      </div>
      <div className="p-3">
        <div className="text-white text-xs font-bold truncate">{product.name}</div>
        <div className="text-[10px] mt-0.5" style={{ color: TEXT_DIM }}>
          {product.subtitle}
        </div>
        <div className="text-sm font-black mt-1 tabular-nums" style={{ color: ORANGE }}>
          ${product.price}
        </div>
        <div className="text-[10px] mt-1" style={{ color: TEXT_DIM }}>
          Add to Cart
        </div>
      </div>
    </button>
  );
}

function InstaStrip() {
  const patterns = [
    "linear-gradient(135deg, rgba(220, 38, 38,0.20), transparent 70%)",
    "radial-gradient(circle at 30% 30%, rgba(220, 38, 38,0.18), transparent 70%)",
    "linear-gradient(45deg, rgba(220, 38, 38,0.05), rgba(220, 38, 38,0.18))",
    "radial-gradient(circle at 70% 70%, rgba(220, 38, 38,0.16), transparent 70%)",
    "linear-gradient(180deg, rgba(220, 38, 38,0.10), rgba(220, 38, 38,0.02))",
    "linear-gradient(90deg, rgba(220, 38, 38,0.12), rgba(220, 38, 38,0.02) 80%)",
  ];
  return (
    <section className="px-4 sm:px-6 pt-3 pb-7">
      <div className="text-[10px] tracking-wider uppercase mb-3" style={{ color: TEXT_DIM }}>
        As Seen on @DRFT
      </div>
      <div className="flex gap-2 overflow-x-auto pb-1">
        {patterns.map((p, i) => (
          <div
            key={i}
            className="shrink-0 w-16 h-16 rounded-lg relative overflow-hidden hover:scale-105 transition-transform"
            style={{ background: SURFACE_CARD, backgroundImage: p }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(0deg, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                backgroundSize: "8px 8px",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
