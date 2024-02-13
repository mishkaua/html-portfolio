import { FaPhoneAlt } from "react-icons/fa";

export function Contact() {
  return (
    <div className="hover:scale-105 transform transition border hover:border-sky-200 p-8 lg:p-12">
      <div className="flex flex-col flex-center text-sky-200 rounded space-y-10 text-4xl">
        <div className="pt-4 text-sky-200">
          {"VOUS AVEZ UN "}
          <span className="text-white font-extrabold underline underline-offset-4">
            PROJET DE STAGE
          </span>
          ?
        </div>
        <div>{"N'HESITEZ PAS A ME CONTACTER SUR"}</div>
        <div className="font-bold pb-8">
          <div className="flex flex-row flex-center">
            <FaPhoneAlt className="animate-pulse mr-4" size={25} />
            <div className="text-white">06 56 75 59 24</div>
          </div>
        </div>
      </div>
    </div>
  );
}
