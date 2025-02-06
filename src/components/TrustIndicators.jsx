export default function TrustIndicators() {
  return (
    <div 
      className="trust-indicators"
      role="region"
      aria-label="Indicadores de confianza"
    >
      <div 
        className="trust-item"
        role="article"
      >
        <div 
          className="trust-icon"
          aria-hidden="true"
        >
          <img src="/icons/check.png" alt="" role="presentation" />
        </div>
        <div className="trust-text">
          <span 
            className="trust-number"
            aria-label="Más de 1000 importaciones exitosas"
          >
            +1,000
          </span>
          <span className="trust-label">Importaciones Exitosas</span>
        </div>
      </div>

      <div 
        className="trust-item"
        role="article"
      >
        <div 
          className="trust-icon"
          aria-hidden="true"
        >
          <img src="/icons/dollar.png" alt="" role="presentation" />
        </div>
        <div className="trust-text">
          <span 
            className="trust-number"
            aria-label="30 por ciento de ahorro promedio"
          >
            30%
          </span>
          <span className="trust-label">Ahorro Promedio</span>
        </div>
      </div>

      <div 
        className="trust-item"
        role="article"
      >
        <div 
          className="trust-icon"
          aria-hidden="true"
        >
          <img src="/icons/like.png" alt="" role="presentation" />
        </div>
        <div className="trust-text">
          <span 
            className="trust-number"
            aria-label="98 por ciento de satisfacción del cliente"
          >
            98%
          </span>
          <span className="trust-label">Satisfacción Cliente</span>
        </div>
      </div>
    </div>
  )
} 