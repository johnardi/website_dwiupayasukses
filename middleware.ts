import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except:
  // - those starting with `/api`, `/trpc`, `/_next`, or `/_vercel`
  // - those containing a dot (e.g. `favicon.ico`, `.png`, etc.)
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"]
};
