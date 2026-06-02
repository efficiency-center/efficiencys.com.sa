import Image from "next/image";
import { withBasePath } from "@/lib/paths";

const LOGO_SRC = withBasePath("/assets/imgs/logo.png");
const LOGO_ALT = "Efficiency Center — مركز الكفاءة";

type LogoProps = {
  variant?: "navbar" | "footer";
  priority?: boolean;
};

export default function Logo({ variant = "navbar", priority = false }: LogoProps) {
  return (
    <Image
      src={LOGO_SRC}
      alt={LOGO_ALT}
      width={215}
      height={150}
      className={`site-logo site-logo--${variant}`}
      priority={priority}
    />
  );
}
