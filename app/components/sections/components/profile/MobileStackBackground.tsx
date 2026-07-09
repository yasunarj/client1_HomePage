import { motion, MotionValue, useTransform } from "framer-motion";

interface MobileStackBackgroundProps {
  scrollYProgress: MotionValue<number>;
}

const MobileStackBackground = ({
  scrollYProgress,
}: MobileStackBackgroundProps) => {
  const orangeY = useTransform(scrollYProgress, [0, 1], ["-10%", "18%"]);
  const orangeX = useTransform(scrollYProgress, [0, 1], ["-20%", "12%"]);

  const redY = useTransform(scrollYProgress, [0, 1], ["20%", "-12%"]);
  const redX = useTransform(scrollYProgress, [0, 1], ["18%", "-14%"]);

  const centerY = useTransform(scrollYProgress, [0, 1], ["10%", "-18%"]);
  const centerOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.25, 0.5, 0.28],
  );

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-orange-500/30 blur-3xl"
        style={{ x: orangeX, y: orangeY }}
      />

      <motion.div
        className="absolute -right-28 bottom-24 h-80 w-80 rounded-full bg-red-500/25 blur-3xl"
        style={{ x: redX, y: redY }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-300/15 blur-3xl"
        style={{
          y: centerY,
          opacity: centerOpacity,
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(249,115,22,0.18),transparent_34%),radial-gradient(circle_at_20%_70%,rgba(239,68,68,0.14),transparent_32%),radial-gradient(circle_at_80%_65%,rgba(251,146,60,0.12),transparent_30%)]" />
    </div>
  );
};

export default MobileStackBackground;
