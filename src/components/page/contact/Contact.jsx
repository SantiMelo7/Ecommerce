import MainTitle from "@/components/reutilizable/MainTitle";

export default function Contact() {
  return (
    <>
      <MainTitle title="Contact Us" subtTitle="" />
      <div className="flex justify-center items-center flex-col max-w-2xl mx-auto gap-y-4 text-center">
        <p className="span-about">
          Thank you for considering us for your technology needs! At Lorem,
          we&apos;re dedicated to providing exceptional service and support to
          our customers. Customer Support Hotline: +1 (555) 123-4567 Our hotline
          is available Monday through Friday, from 9:00 AM to 6:00 PM (EST).
        </p>
        <p className="span-about">
          Whether you&apos;re troubleshooting technical issues, exploring
          product features, or seeking assistance with your account, we&apos;re
          committed to providing prompt and effective solutions.
        </p>
        <p className="span-about">
          Your Satisfaction Guaranteed: At Lorem, customer satisfaction is our
          top priority. We&apos;re committed to providing exceptional service
          and support to ensure that your experience with us is positive and
          hassle-free.
        </p>
        <p className="span-about">
          Thank you for choosing Lorem as your technology partner. We look
          forward to serving you!
        </p>
      </div>
    </>
  );
}
