import { Product } from "@shopware-pwa/commons/interfaces/models/content/product/Product";
import { UiProductOption } from "../ui-interfaces";

/**
 * @beta
 */
export function getProductOptions({
  product,
}: {
  product?: Product;
} = {}): UiProductOption[] {
  return (
    product?.options?.map((option) => ({
      label: option.translated?.name || option.name,
      code: option.id,
      value: option.translated?.name || option.name,
      color: option.colorHexCode,
    })) || []
  );
}
