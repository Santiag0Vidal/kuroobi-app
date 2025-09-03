import { CircleX } from "lucide-react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import * as C from "../../../componentes/index"

const ModalGenerarMsj = ({ setOpen }) => {


    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center ">
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="rounded-2xl shadow-2xl w-full max-w-2xl relative overflow-y-auto max-h-[90vh] bg-white scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-100"
            >
       
                <button
                    onClick={() => setOpen(false)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition shadow-sm"
                >
                    <CircleX className="w-6 h-6" />
                </button>

                {/* Contenido */}
                <div className="p-8">
                    <C.GeneradorMsj setOpen={setOpen}/>
                </div>
            </motion.div>
        </div>


    );
};

ModalGenerarMsj.propTypes = {
    setOpen: PropTypes.func.isRequired,
    actividad: PropTypes.any,
    planes: PropTypes.any,
};

export default ModalGenerarMsj;