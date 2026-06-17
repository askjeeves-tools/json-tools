import { toolConfig } from "../tool.config";

export {
	HOW_IT_WORKS_STEPS,
	SECURITY_SECTION_COPY,
	CONVERSION_DESCRIPTIONS,
} from "./seo-copy";

export function getEnabledConversions() {
	return toolConfig.conversions.filter((conversion) => conversion.enabled);
}

export function getEnabledConversionLabels() {
	return getEnabledConversions().map((conversion) => conversion.label);
}
