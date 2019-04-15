import { chartConfig } from "../config";

const makeBondDataWithPeriod = (
  bondsData,
  period = chartConfig.periods.MONTH || "MONTH"
) => {
  if (!(bondsData instanceof Array)) {
    return [];
  }

  switch (period) {
    case chartConfig.periods.WEEK:
      return bondsData.slice(-5);
    case chartConfig.periods.MONTH:
      return bondsData.slice(-20);
    case chartConfig.periods.QUARTER:
      return bondsData.slice(-60);
    case chartConfig.periods.YEAR:
      return bondsData.slice(-240);
    case chartConfig.periods.MAX:
      return bondsData;
    default:
      return bondsData;
  }
};

export default makeBondDataWithPeriod;
