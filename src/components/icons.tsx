import {
  HomeIcon,
  // HamburgerMenuIcon,
  PaperPlaneIcon,
  ExclamationTriangleIcon,
  ArrowLeftIcon,
  LayersIcon,
  PlusIcon,
  MinusIcon,
  StarIcon,
  HeartIcon,
  HeartFilledIcon,
  DashboardIcon,
  GearIcon,
  ExitIcon,
  TrashIcon,
  VideoIcon,
} from "@radix-ui/react-icons";

import { LuDatabase, LuFileSpreadsheet, LuPanelLeftOpen } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { MdOutlineCategory } from "react-icons/md";
import { MdOutlineArticle } from "react-icons/md";
import { BiLinkExternal } from "react-icons/bi";
import { MdOutlinePhoneForwarded } from "react-icons/md";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaCalculator, FaFacebookF, FaUsers } from "react-icons/fa";
import { RiMenuFoldLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { PiArrowBendDownRight, PiPackageFill } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { GrPieChart } from "react-icons/gr";
import { FaChartBar } from "react-icons/fa";
import { BsBarChartLine, BsClipboardCheckFill } from "react-icons/bs";
import { FiTrendingUp } from "react-icons/fi";
import { SiQuickbooks } from "react-icons/si";
import { FiArrowUpCircle } from "react-icons/fi";

export type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: (props: IconProps) => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 9C3 6.5 4.5 4.25 7.5 1.5C10.5 4.25 12 6.5 12 9C12 11.4853 9.98528 13.5 7.5 13.5C5.01472 13.5 3 11.4853 3 9ZM10.9524 8.30307C9.67347 7.82121 8.2879 8.46208 6.98956 9.06259C5.9327 9.55142 4.93365 10.0135 4.09695 9.82153C4.03357 9.55804 4 9.28294 4 9C4 7.11203 5.02686 5.27195 7.5 2.87357C9.66837 4.97639 10.725 6.65004 10.9524 8.30307Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  ),

  home: HomeIcon,
  openMenu: LuPanelLeftOpen,
  user: FaRegUser,
  sentEmail: FaEnvelopeOpenText,
  phone: MdOutlinePhoneForwarded,

  paperPlane: PaperPlaneIcon,
  exclamation: ExclamationTriangleIcon,
  arrowLeft: ArrowLeftIcon,
  layers: LayersIcon,
  plus: PlusIcon,
  minus: MinusIcon,
  star: StarIcon,
  heart: HeartIcon,
  heartFill: HeartFilledIcon,
  dashboard: DashboardIcon,
  category: MdOutlineCategory,
  article: MdOutlineArticle,
  gear: GearIcon,
  exit: ExitIcon,
  trash: TrashIcon,
  Video: VideoIcon,
  link: BiLinkExternal,
  mail: MdOutlineMarkEmailRead,
  facebook: FaFacebookF,
  linkedin: FaLinkedin,
  menu: RiMenuFoldLine,
  step: PiArrowBendDownRight,
  twitter: FaTwitter,
  chartBar: FaChartBar,
  pieChart: GrPieChart,
  wallet: GiWallet,
  clipboardCheck: BsClipboardCheckFill,
  trendingUp: FiTrendingUp,
  calculator: FaCalculator,
  package: PiPackageFill,
  users: FaUsers,
  fileSpreadsheet: LuFileSpreadsheet,
  database: LuDatabase,
  bookOpen: SiQuickbooks,
  barChart: BsBarChartLine,
  upArrow: FiArrowUpCircle,
};
