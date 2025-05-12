import React from "react";
import styles from "@/styles/activitiesCard.module.css";

type GlowEffectProps = {
  isActive: boolean;
};

const GlowEffect = ({ isActive }: GlowEffectProps) => {
  return (
    <div className={`${styles.tracker} ${isActive ? styles.cardHovered : ""}`}>
      <div className={styles.glowingElements}>
        <div className={styles.glow1}></div>
        <div className={styles.glow2}></div>
        <div className={styles.glow3}></div>
      </div>
      <div className={styles.cardParticles}>
        <span></span><span></span><span></span>
        <span></span><span></span><span></span>
      </div>
    </div>
  );
};

export default GlowEffect;
