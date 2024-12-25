import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import HighlightC3 from "../project_cards/highlight-c3";
import OpenACHES from "../project_cards/openaches";
import MotherC1 from "../project_cards/mother-c1";

export default function Projects() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Projects</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <OpenACHES />
        <MotherC1 />
        <HighlightC3 />
      </CardContent>
    </Card>
  );
}
