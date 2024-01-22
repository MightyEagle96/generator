import {
  faToolbox,
  faTools,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const services = [
  {
    name: "Repairs",
    image: () => <FontAwesomeIcon icon={faTools} />,
    text: `Generator repair services are crucial for restoring the functionality of a generator system that has experienced issues or failures. These services involve a combination of diagnostic, corrective, and preventive measures to address specific problems and ensure the reliable operation of the generator. Some of our services include, diagnostic assessment, component inspection and replacement, electrical system repairs, engine overhauals, etc`,
  },
  {
    name: "Maintenance",
    image: () => <FontAwesomeIcon icon={faWrench} />,
    text: `Maintenance services for a generator are essential to ensure its optimal performance, reliability, and longevity. These services encompass a range of tasks designed to identify and address potential issues, prevent breakdowns, and keep the generator in peak condition.`,
  },
  {
    name: "Installation",
    image: () => <FontAwesomeIcon icon={faToolbox} />,
    text: `The installation of a generator power plant is a complex process that involves various tasks to ensure the safe, efficient, and reliable operation of the power generation system. Our installation services include site assessment, engineering and design, permitting and regulatory compliance, foundation construction, generator installation, fuel system installation, cooling system setup, etc.`,
  },
];
