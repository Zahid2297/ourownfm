import { motion } from "framer-motion";

const FeatureCard = ({ icon: Icon, title, description, color, bgColor }) => {
  return (
    <motion.div
      className="w-full h-full flex flex-col items-center justify-center text-center p-8 rounded-2xl bg-background border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Icon Circle */}
      <div
        className={`w-20 h-20 rounded-full ${bgColor} flex items-center justify-center mb-6`}
      >
        <div
          className={`w-12 h-12 rounded-full bg-gradient-to-br ${color} flex items-center justify-center`}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;
