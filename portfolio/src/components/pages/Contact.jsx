import { FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div
      id="contact"
      className="border hover:border-sky-200 p-8 lg:p-12 pt-10 mt-[-10]"
    >
      <div className="hover:scale-105 transform transition flex flex-col flex-center text-center text-sky-200 rounded space-y-10 text-4xl">
        <div className="pt-4 text-sky-200">
          {"VOUS AVEZ UN "}
          <span className="text-white font-extrabold underline underline-offset-4">
            PROJET DE STAGE
          </span>
          ?
        </div>
        <div>{"N'HESITEZ PAS A ME CONTACTER SUR"}</div>
        <div className="font-bold pb-2 md:pb-8">
          <div className="flex flex-row flex-center">
            <FaPhoneAlt className="animate-pulse mr-4" size={25} />
            <div className="text-white text-2xl md:text-4xl">
              06 56 75 59 24
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
