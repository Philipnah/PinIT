import AnimatedContent from "@/blocks/Animations/AnimatedContent/AnimatedContent";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function AnimatedPin({ pin }: { pin: Pin }) {
  function prettierISO(ISOString: string) {
    return ISOString.split(".")[0].replace("T", " ");
  }

  return (
    <AnimatedContent
      distance={100}
      direction="vertical"
      reverse={false}
      duration={0.8}
      ease="power3.out"
      initialOpacity={0.0}
      animateOpacity
      scale={1.0}
      threshold={0.0}
      delay={0.0}
    >
      <Card
        key={pin.id}
        className="w-xs sm:w-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      >
        <CardHeader>
          <CardTitle>{pin.title}</CardTitle>
          <CardDescription>
            {pin.author}
            <br />
            {prettierISO(pin.created_at)}
          </CardDescription>
          <CardAction>Copy to Clipboard</CardAction>
        </CardHeader>
        <CardContent>
          <p>{pin.content}</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </AnimatedContent>
  );
}
