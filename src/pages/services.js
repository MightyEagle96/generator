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

export const aboutUsSection = {
  p1: `Welcome to Konan Solutions, your premier destination for comprehensive generator solutions! With a commitment to excellence and a passion for reliable power, we specialize in generator repairs, installation, servicing, and maintenance.`,
  p2: `At Konan Solutions, we understand the critical role generators play in ensuring uninterrupted power supply for both residential and commercial settings. Our team of highly skilled technicians is dedicated to providing top-notch services to keep your generators running smoothly and efficiently.`,
};

export const whyChooseUs = [
  {
    backgroundColor: "#222831",
    color: "#fff",
    title: "Expertise",
    text: `Our team comprises highly skilled and certified technicians with extensive experience in the field of generator services.`,
  },
  {
    backgroundColor: "#393e46",
    color: "#fff",
    title: "Reliabilty",
    text: `We prioritize reliability in all aspects of our services. You can trust us to deliver consistent and dependable solutions.`,
  },
  {
    backgroundColor: "#f96d00",
    color: "#fff",
    title: "Customer Satisfaction",
    text: `Your satisfaction is our top priority. We strive to exceed your expectations through quality workmanship and excellent customer service.`,
  },
  {
    backgroundColor: "#f2f2f2",
    color: "#5c5757",
    title: "Customized Solutions",
    text: `We understand that every client's needs are unique. Our services are tailored to meet your specific requirements, ensuring a customized and effective approach.`,
  },
];
export const bottomText = {
  p1: `Whether you're looking for immediate repairs, a new installation, routine servicing, or preventive maintenance, KONAN SOLUTIONS is your go-to partner for all your generator needs.`,
  p2: `Contact us today to experience the difference of working with a dedicated team committed to keeping your power on!`,
};
