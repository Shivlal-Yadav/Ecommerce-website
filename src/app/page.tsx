import ProductGrid from "@/components/product-grid";
import { mockProducts } from "@/lib/data";

export default function Home() {
  return (
    <div>
      <ProductGrid products={mockProducts} />
    </div>
  );
}
