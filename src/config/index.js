const chartConfig = {
  xAxis: {
    dataKey: "date",
    interval: "preserveEnd",
    minTickGap: 10,
    tickCount: 10
  },

  indicators: {
    YIELD: "yield",
    SPREAD: "spread",
    PRICE: "price"
  },

  periods: {
    WEEK: "week",
    MONTH: "month",
    QUARTER: "quarter",
    YEAR: "year",
    MAX: "max"
  },

  size: {
    width: 550,
    height: 300
  },

  styles: {
    lineType: "monotone",
    lineStrokeColor: "#8884d8",
    cartesianGridStrokeColor: "#ccc",
    cartesianGridStrokeDasharray: "5 5"
  }
};

const inputsConfig = {
  size: "large"
};

const api = "http://www.mocky.io/v2/";

const bondsConfig = {
  lukoil: {
    isin: "XS0554659671",
    url: api + "5caf64393400009b24ab730d"
  },

  sberbank: {
    isin: "XS0743596040",
    url: api + "5caf651c3400009b24ab7311"
  },

  alfabank: {
    isin: "XS1762980065",
    url: api + "5cb046343100005500e132f4"
  },

  gazprom: {
    isin: "XS0191754729",
    url: api + "5cb094843100003f37e13559"
  }
};

export { chartConfig, inputsConfig, bondsConfig };
