import { jsonToCsv } from "@askjeeves/processors-csv-json";
import type { ProcessorMap } from "@askjeeves/ui/scripts/tool-controller";

export const processors: ProcessorMap = {
	"json-csv": jsonToCsv,
};
