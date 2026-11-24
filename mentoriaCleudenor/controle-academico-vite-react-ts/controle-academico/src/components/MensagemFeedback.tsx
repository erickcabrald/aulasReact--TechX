import { CheckCircle2, AlertCircle, X } from "lucide-react";
import type { Feedback } from "../types";

type Props = {
  feedback: Feedback;
  onFechar: () => void;
};

function MensagemFeedback({ feedback, onFechar }: Props) {
  const sucesso = feedback.tipo === "sucesso";

  return (
    <div
      className={`feedback-message ${sucesso ? "feedback-success" : "feedback-error"}`}
      role={sucesso ? "status" : "alert"}
    >
      {sucesso ? <CheckCircle2 size={19} /> : <AlertCircle size={19} />}
      <span>{feedback.mensagem}</span>
      <button type="button" className="feedback-close" onClick={onFechar} aria-label="Fechar mensagem">
        <X size={17} />
      </button>
    </div>
  );
}

export default MensagemFeedback;