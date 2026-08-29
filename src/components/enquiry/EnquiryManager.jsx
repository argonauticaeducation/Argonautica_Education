import { useEffect, useState } from "react";
import EnquiryModal from "./EnquiryModal";

const EnquiryManager = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const openHandler = () => {
      setIsOpen(true);
    };

    window.addEventListener(
      "open-enquiry",
      openHandler
    );

    return () => {
      window.removeEventListener(
        "open-enquiry",
        openHandler
      );
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <EnquiryModal
      isOpen={isOpen}
      onClose={handleClose}
    />
  );
};

export default EnquiryManager;