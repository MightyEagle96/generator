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
  },
  {
    name: "Servicing",
    image: () => <FontAwesomeIcon icon={faWrench} />,
  },
  {
    name: "Installation",
    image: () => <FontAwesomeIcon icon={faToolbox} />,
  },
];
