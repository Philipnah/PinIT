import SplitText from "@/blocks/TextAnimations/SplitText/SplitText";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

export default function Title({ text }: { text: string }) {
  return (
    <SplitText
      text={text}
      // margin top to avoid overlap with sign out button
      className="text-2xl font-semibold text-center mt-16"
      delay={10}
      duration={2}
      ease="elastic.out(1, 0.3)"
      splitType="chars"
      from={{ opacity: 0, y: 15 }}
      to={{ opacity: 1, y: 0 }}
      threshold={0.1}
      rootMargin="-100px"
      textAlign="center"
      onLetterAnimationComplete={handleAnimationComplete}
    />
  );
}
