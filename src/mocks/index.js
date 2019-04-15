const bondDataMock = {
  isin: "XS0191754729",
  name: "Gazprom",
  fullName: "Gaz Capital S.A.",
  industry: "Oil and Gas",
  couponRate: 7,
  currentYield: 18,
  currency: "USD",
  maturityDate: "15.09.2024",
  data: [
    {
      yield: 3.13,
      spread: 8.82,
      price: 88.83,
      date: "12/10/2017"
    },
    {
      yield: 13.29,
      spread: 0.6,
      price: 108.17,
      date: "10/09/2016"
    },
    {
      yield: 13.11,
      spread: 3.61,
      price: 96.42,
      date: "14/02/2018"
    },
    {
      yield: 2.81,
      spread: 6.3,
      price: 115.59,
      date: "05/03/2019"
    },
    {
      yield: 1.03,
      spread: 8.28,
      price: 113.94,
      date: "19/03/2018"
    },
    {
      yield: 9.42,
      spread: 2.44,
      price: 103.78,
      date: "24/07/2018"
    },
    {
      yield: 4.32,
      spread: 0.43,
      price: 89.72,
      date: "25/07/2017"
    },
    {
      yield: 10.61,
      spread: 0.98,
      price: 87.77,
      date: "27/04/2016"
    },
    {
      yield: 2.6,
      spread: 7.54,
      price: 117.45,
      date: "20/08/2017"
    },
    {
      yield: 6.84,
      spread: 8.63,
      price: 89.65,
      date: "22/09/2016"
    },
    {
      yield: 10.2,
      spread: 1,
      price: 90.89,
      date: "22/07/2017"
    },
    {
      yield: 7.12,
      spread: 2.77,
      price: 124.25,
      date: "30/03/2018"
    },
    {
      yield: 13.34,
      spread: 3.72,
      price: 95.85,
      date: "13/12/2018"
    },
    {
      yield: 7.67,
      spread: 7.51,
      price: 109.35,
      date: "06/11/2017"
    },
    {
      yield: 4.41,
      spread: 7.51,
      price: 95.01,
      date: "12/10/2016"
    },
    {
      yield: 12.71,
      spread: 5.06,
      price: 87.29,
      date: "29/06/2016"
    },
    {
      yield: 6.9,
      spread: 4.7,
      price: 88.57,
      date: "23/01/2019"
    },
    {
      yield: 6.68,
      spread: 1.47,
      price: 94.22,
      date: "14/07/2016"
    },
    {
      yield: 3.62,
      spread: 4.84,
      price: 91.26,
      date: "15/12/2017"
    },
    {
      yield: 13.54,
      spread: 5.52,
      price: 113.15,
      date: "14/07/2018"
    },
    {
      yield: 14.99,
      spread: 0.86,
      price: 95.61,
      date: "15/08/2016"
    },
    {
      yield: 9.02,
      spread: 8.62,
      price: 105.67,
      date: "11/11/2018"
    },
    {
      yield: 13.99,
      spread: 9.86,
      price: 120.14,
      date: "28/05/2017"
    },
    {
      yield: 8.29,
      spread: 8.47,
      price: 114.56,
      date: "12/02/2018"
    },
    {
      yield: 3.69,
      spread: 5.7,
      price: 115.54,
      date: "13/12/2016"
    },
    {
      yield: 13.6,
      spread: 5.17,
      price: 95.03,
      date: "09/10/2017"
    },
    {
      yield: 5.99,
      spread: 6.52,
      price: 114.29,
      date: "29/08/2016"
    },
    {
      yield: 4.51,
      spread: 1.43,
      price: 116.82,
      date: "01/08/2018"
    },
    {
      yield: 8.55,
      spread: 8.58,
      price: 99.68,
      date: "28/09/2018"
    },
    {
      yield: 11.66,
      spread: 0.73,
      price: 91.74,
      date: "30/08/2016"
    },
    {
      yield: 3.52,
      spread: 8.7,
      price: 99.63,
      date: "02/06/2017"
    },
    {
      yield: 8.52,
      spread: 6.83,
      price: 110.5,
      date: "20/06/2017"
    },
    {
      yield: 12.56,
      spread: 9.75,
      price: 96.07,
      date: "24/02/2018"
    },
    {
      yield: 13.29,
      spread: 9.73,
      price: 121.04,
      date: "16/10/2018"
    },
    {
      yield: 7.2,
      spread: 2.43,
      price: 96.68,
      date: "08/01/2019"
    },
    {
      yield: 12.31,
      spread: 6.86,
      price: 104.8,
      date: "03/11/2018"
    },
    {
      yield: 6.83,
      spread: 1.37,
      price: 92.4,
      date: "10/05/2017"
    },
    {
      yield: 5.25,
      spread: 5.5,
      price: 117.24,
      date: "25/12/2016"
    },
    {
      yield: 2.24,
      spread: 2.59,
      price: 88,
      date: "16/01/2018"
    },
    {
      yield: 13.54,
      spread: 0.2,
      price: 100.34,
      date: "21/08/2017"
    },
    {
      yield: 2.37,
      spread: 9.01,
      price: 116.9,
      date: "30/07/2017"
    },
    {
      yield: 2,
      spread: 0.69,
      price: 101.08,
      date: "27/09/2016"
    },
    {
      yield: 5.25,
      spread: 4.48,
      price: 115.15,
      date: "16/03/2017"
    },
    {
      yield: 11.7,
      spread: 9.8,
      price: 96.47,
      date: "11/04/2018"
    },
    {
      yield: 12.75,
      spread: 1.66,
      price: 103.27,
      date: "24/08/2016"
    },
    {
      yield: 12.66,
      spread: 9.03,
      price: 116.6,
      date: "31/07/2016"
    },
    {
      yield: 13.65,
      spread: 2.37,
      price: 99.05,
      date: "25/12/2018"
    },
    {
      yield: 2.43,
      spread: 4.02,
      price: 112.85,
      date: "10/12/2016"
    },
    {
      yield: 7.06,
      spread: 4.15,
      price: 96.26,
      date: "25/09/2016"
    },
    {
      yield: 8.72,
      spread: 0.99,
      price: 85.14,
      date: "19/01/2019"
    },
    {
      yield: 7.88,
      spread: 0.34,
      price: 86.24,
      date: "29/03/2019"
    },
    {
      yield: 5.03,
      spread: 1.23,
      price: 100.79,
      date: "03/12/2016"
    },
    {
      yield: 2.25,
      spread: 2.9,
      price: 114.27,
      date: "14/07/2018"
    },
    {
      yield: 2.91,
      spread: 8.5,
      price: 122.94,
      date: "27/06/2018"
    },
    {
      yield: 9.91,
      spread: 5.55,
      price: 87.14,
      date: "30/05/2016"
    },
    {
      yield: 3.92,
      spread: 7.8,
      price: 94.31,
      date: "19/09/2017"
    },
    {
      yield: 12.7,
      spread: 1.49,
      price: 121.44,
      date: "03/06/2016"
    },
    {
      yield: 2.25,
      spread: 8.69,
      price: 97.49,
      date: "29/10/2017"
    },
    {
      yield: 4.02,
      spread: 1.95,
      price: 122.98,
      date: "20/02/2018"
    },
    {
      yield: 2.9,
      spread: 7.17,
      price: 99.09,
      date: "13/08/2018"
    },
    {
      yield: 8.37,
      spread: 8.24,
      price: 107.61,
      date: "06/02/2019"
    },
    {
      yield: 7.63,
      spread: 1.23,
      price: 106.82,
      date: "18/02/2018"
    },
    {
      yield: 11.8,
      spread: 2.49,
      price: 85.41,
      date: "06/04/2019"
    },
    {
      yield: 11.7,
      spread: 6.19,
      price: 112.88,
      date: "11/10/2016"
    },
    {
      yield: 11.62,
      spread: 1.36,
      price: 87.92,
      date: "10/06/2017"
    },
    {
      yield: 5.23,
      spread: 7.3,
      price: 87.96,
      date: "22/10/2018"
    },
    {
      yield: 5.65,
      spread: 4.3,
      price: 100.08,
      date: "08/06/2018"
    },
    {
      yield: 1.12,
      spread: 0.34,
      price: 91.13,
      date: "02/03/2019"
    },
    {
      yield: 8.44,
      spread: 0.97,
      price: 112.11,
      date: "18/02/2017"
    },
    {
      yield: 2.21,
      spread: 0.63,
      price: 85.18,
      date: "16/10/2018"
    },
    {
      yield: 6.55,
      spread: 7.12,
      price: 97.36,
      date: "05/02/2019"
    },
    {
      yield: 3.38,
      spread: 7.99,
      price: 124.36,
      date: "03/10/2017"
    },
    {
      yield: 13.66,
      spread: 1.98,
      price: 122.44,
      date: "01/03/2019"
    },
    {
      yield: 12.58,
      spread: 1.01,
      price: 92.71,
      date: "10/04/2017"
    },
    {
      yield: 7,
      spread: 9.47,
      price: 106.07,
      date: "29/10/2017"
    },
    {
      yield: 12.99,
      spread: 1.12,
      price: 100.94,
      date: "10/10/2017"
    },
    {
      yield: 11.55,
      spread: 1.4,
      price: 117.63,
      date: "24/11/2018"
    },
    {
      yield: 9.21,
      spread: 4.89,
      price: 113.49,
      date: "30/01/2019"
    },
    {
      yield: 11.85,
      spread: 1.6,
      price: 93.6,
      date: "28/09/2018"
    },
    {
      yield: 8.03,
      spread: 1.8,
      price: 108.16,
      date: "22/12/2016"
    },
    {
      yield: 10.58,
      spread: 3.42,
      price: 112.34,
      date: "18/05/2017"
    },
    {
      yield: 14.82,
      spread: 5.21,
      price: 90.67,
      date: "07/08/2017"
    },
    {
      yield: 14.27,
      spread: 6.83,
      price: 122.25,
      date: "02/11/2017"
    },
    {
      yield: 5.25,
      spread: 5.44,
      price: 111.53,
      date: "06/10/2016"
    },
    {
      yield: 7.14,
      spread: 8.78,
      price: 100.13,
      date: "26/08/2018"
    },
    {
      yield: 13.35,
      spread: 9.89,
      price: 94.94,
      date: "21/08/2016"
    },
    {
      yield: 5.07,
      spread: 4.36,
      price: 91.82,
      date: "16/08/2016"
    },
    {
      yield: 12.01,
      spread: 5.61,
      price: 101.31,
      date: "16/09/2016"
    },
    {
      yield: 2.15,
      spread: 3.15,
      price: 109.7,
      date: "11/11/2016"
    },
    {
      yield: 6.24,
      spread: 7.61,
      price: 101.69,
      date: "13/12/2016"
    },
    {
      yield: 13.26,
      spread: 3.36,
      price: 92.25,
      date: "13/07/2018"
    },
    {
      yield: 3.22,
      spread: 6.69,
      price: 94.65,
      date: "03/06/2016"
    },
    {
      yield: 12.42,
      spread: 3.62,
      price: 115.49,
      date: "09/08/2016"
    },
    {
      yield: 12.31,
      spread: 0.23,
      price: 107.89,
      date: "27/05/2016"
    },
    {
      yield: 10.74,
      spread: 2.23,
      price: 109.94,
      date: "13/04/2017"
    },
    {
      yield: 2.93,
      spread: 5.66,
      price: 91.98,
      date: "16/02/2017"
    },
    {
      yield: 8.56,
      spread: 9.25,
      price: 118.95,
      date: "31/05/2017"
    },
    {
      yield: 3.95,
      spread: 4.72,
      price: 95.81,
      date: "09/06/2016"
    },
    {
      yield: 4.88,
      spread: 6.54,
      price: 119.76,
      date: "12/01/2018"
    },
    {
      yield: 8.73,
      spread: 3.02,
      price: 86.84,
      date: "02/09/2017"
    },
    {
      yield: 5.74,
      spread: 4.46,
      price: 91.91,
      date: "08/06/2017"
    },
    {
      yield: 3.09,
      spread: 9.53,
      price: 107.7,
      date: "19/07/2017"
    },
    {
      yield: 1.72,
      spread: 3.49,
      price: 119.43,
      date: "31/12/2016"
    },
    {
      yield: 2.08,
      spread: 0.84,
      price: 103.86,
      date: "12/04/2016"
    },
    {
      yield: 3.58,
      spread: 6.5,
      price: 113.42,
      date: "09/06/2016"
    },
    {
      yield: 13.66,
      spread: 3.39,
      price: 123.66,
      date: "29/09/2016"
    },
    {
      yield: 6.4,
      spread: 9.91,
      price: 96.48,
      date: "24/05/2018"
    },
    {
      yield: 8.69,
      spread: 9.22,
      price: 108.9,
      date: "07/01/2019"
    },
    {
      yield: 14.07,
      spread: 9.09,
      price: 109.18,
      date: "21/10/2018"
    },
    {
      yield: 4.98,
      spread: 1.77,
      price: 110.14,
      date: "06/07/2017"
    },
    {
      yield: 10.4,
      spread: 6.72,
      price: 116.35,
      date: "04/09/2018"
    },
    {
      yield: 8.75,
      spread: 1.14,
      price: 113.29,
      date: "28/08/2017"
    },
    {
      yield: 6.77,
      spread: 8.59,
      price: 104.11,
      date: "23/01/2019"
    },
    {
      yield: 4.65,
      spread: 1.59,
      price: 113.25,
      date: "24/04/2016"
    },
    {
      yield: 10.89,
      spread: 3.89,
      price: 112.24,
      date: "15/07/2018"
    },
    {
      yield: 7.45,
      spread: 3.88,
      price: 85.63,
      date: "09/02/2017"
    },
    {
      yield: 13.97,
      spread: 6.79,
      price: 89.28,
      date: "12/09/2016"
    },
    {
      yield: 6.84,
      spread: 5.97,
      price: 108.05,
      date: "30/12/2018"
    },
    {
      yield: 2.77,
      spread: 0.6,
      price: 88.85,
      date: "27/04/2017"
    },
    {
      yield: 4.72,
      spread: 4.17,
      price: 113.84,
      date: "28/09/2018"
    },
    {
      yield: 14.85,
      spread: 8.58,
      price: 115.08,
      date: "04/09/2016"
    },
    {
      yield: 10.48,
      spread: 5.61,
      price: 93.64,
      date: "22/03/2018"
    },
    {
      yield: 14.38,
      spread: 5.93,
      price: 110.7,
      date: "12/01/2017"
    },
    {
      yield: 9.19,
      spread: 2.74,
      price: 116.32,
      date: "26/05/2017"
    },
    {
      yield: 8.86,
      spread: 8.96,
      price: 117.55,
      date: "22/11/2016"
    },
    {
      yield: 9.79,
      spread: 7.73,
      price: 119.68,
      date: "29/07/2017"
    },
    {
      yield: 5.33,
      spread: 9.56,
      price: 119.11,
      date: "10/05/2017"
    },
    {
      yield: 7.46,
      spread: 1.73,
      price: 106.47,
      date: "28/05/2016"
    },
    {
      yield: 13.25,
      spread: 6.13,
      price: 124.76,
      date: "29/01/2019"
    },
    {
      yield: 1.99,
      spread: 6.19,
      price: 117.51,
      date: "04/09/2018"
    },
    {
      yield: 3.36,
      spread: 7.47,
      price: 99.23,
      date: "05/04/2018"
    },
    {
      yield: 11.57,
      spread: 5.85,
      price: 110.42,
      date: "29/11/2017"
    },
    {
      yield: 6.44,
      spread: 8.96,
      price: 111.38,
      date: "08/10/2018"
    },
    {
      yield: 4.66,
      spread: 2.95,
      price: 88.53,
      date: "10/01/2019"
    },
    {
      yield: 7.62,
      spread: 0.48,
      price: 119.96,
      date: "08/07/2016"
    },
    {
      yield: 5.49,
      spread: 3.9,
      price: 110.61,
      date: "17/12/2018"
    },
    {
      yield: 13.66,
      spread: 7.82,
      price: 96.32,
      date: "05/05/2018"
    },
    {
      yield: 8.35,
      spread: 1.72,
      price: 89.68,
      date: "24/02/2019"
    },
    {
      yield: 5.23,
      spread: 8.51,
      price: 92.7,
      date: "02/08/2018"
    },
    {
      yield: 8.76,
      spread: 4.38,
      price: 103.54,
      date: "21/08/2016"
    },
    {
      yield: 7.12,
      spread: 9.04,
      price: 115.47,
      date: "17/05/2017"
    },
    {
      yield: 10.93,
      spread: 4.73,
      price: 87.02,
      date: "18/09/2018"
    },
    {
      yield: 12.49,
      spread: 6.5,
      price: 115.14,
      date: "14/04/2017"
    },
    {
      yield: 8.09,
      spread: 6.79,
      price: 120.7,
      date: "22/12/2016"
    },
    {
      yield: 14.85,
      spread: 2.78,
      price: 93.04,
      date: "13/02/2017"
    },
    {
      yield: 11.9,
      spread: 9.06,
      price: 109.85,
      date: "17/06/2018"
    },
    {
      yield: 3.12,
      spread: 1.78,
      price: 110.8,
      date: "19/01/2019"
    },
    {
      yield: 3.15,
      spread: 0.77,
      price: 114.56,
      date: "22/03/2017"
    },
    {
      yield: 1.51,
      spread: 3.47,
      price: 99.32,
      date: "21/07/2016"
    },
    {
      yield: 1.79,
      spread: 1.81,
      price: 98.49,
      date: "20/12/2016"
    },
    {
      yield: 13.13,
      spread: 5.37,
      price: 122.77,
      date: "23/01/2018"
    },
    {
      yield: 5.87,
      spread: 7.67,
      price: 124.18,
      date: "04/07/2017"
    },
    {
      yield: 14.78,
      spread: 3.18,
      price: 115.71,
      date: "05/08/2016"
    },
    {
      yield: 4.1,
      spread: 7.31,
      price: 121.5,
      date: "12/07/2016"
    },
    {
      yield: 14.86,
      spread: 2.55,
      price: 94.37,
      date: "16/10/2016"
    },
    {
      yield: 7.4,
      spread: 3.62,
      price: 116.1,
      date: "31/10/2017"
    },
    {
      yield: 9.33,
      spread: 8.01,
      price: 93.44,
      date: "20/12/2016"
    },
    {
      yield: 5.88,
      spread: 2.38,
      price: 85.62,
      date: "07/07/2017"
    },
    {
      yield: 10.11,
      spread: 3.9,
      price: 86.59,
      date: "18/06/2016"
    },
    {
      yield: 5.14,
      spread: 9.76,
      price: 95.36,
      date: "21/02/2018"
    },
    {
      yield: 11.46,
      spread: 5.82,
      price: 86.64,
      date: "30/11/2018"
    },
    {
      yield: 4.45,
      spread: 4.7,
      price: 105.8,
      date: "24/11/2016"
    },
    {
      yield: 1.86,
      spread: 0.83,
      price: 102.09,
      date: "21/02/2018"
    },
    {
      yield: 1.21,
      spread: 9.67,
      price: 107.35,
      date: "08/11/2018"
    },
    {
      yield: 10.21,
      spread: 1.21,
      price: 100.53,
      date: "04/09/2016"
    },
    {
      yield: 7.71,
      spread: 5.97,
      price: 101.42,
      date: "20/03/2017"
    },
    {
      yield: 7.28,
      spread: 3.84,
      price: 96.24,
      date: "01/06/2016"
    },
    {
      yield: 3.37,
      spread: 4.33,
      price: 96.62,
      date: "06/02/2018"
    },
    {
      yield: 2.05,
      spread: 6.42,
      price: 92.17,
      date: "21/08/2017"
    },
    {
      yield: 2.09,
      spread: 2.97,
      price: 112.18,
      date: "12/10/2018"
    },
    {
      yield: 14.22,
      spread: 5.48,
      price: 86.79,
      date: "31/10/2017"
    },
    {
      yield: 5.06,
      spread: 4.71,
      price: 123.13,
      date: "15/03/2019"
    },
    {
      yield: 7.81,
      spread: 8.04,
      price: 107.79,
      date: "03/04/2017"
    },
    {
      yield: 6.37,
      spread: 2.39,
      price: 116.16,
      date: "13/06/2017"
    },
    {
      yield: 8.04,
      spread: 3.22,
      price: 85.65,
      date: "15/08/2018"
    },
    {
      yield: 2.67,
      spread: 3.04,
      price: 88.73,
      date: "04/03/2018"
    },
    {
      yield: 8.34,
      spread: 6.1,
      price: 112.14,
      date: "07/06/2018"
    },
    {
      yield: 3.99,
      spread: 9.69,
      price: 119.49,
      date: "11/10/2016"
    },
    {
      yield: 12.87,
      spread: 1.64,
      price: 111.36,
      date: "03/09/2018"
    },
    {
      yield: 9.92,
      spread: 4.43,
      price: 104.59,
      date: "14/04/2017"
    },
    {
      yield: 13.71,
      spread: 3.16,
      price: 96.47,
      date: "13/03/2017"
    },
    {
      yield: 12.29,
      spread: 6.63,
      price: 111.42,
      date: "04/10/2018"
    },
    {
      yield: 10.24,
      spread: 8.77,
      price: 106.09,
      date: "31/05/2017"
    },
    {
      yield: 11.26,
      spread: 7.24,
      price: 93.12,
      date: "03/08/2017"
    },
    {
      yield: 10.71,
      spread: 0.52,
      price: 100.02,
      date: "05/09/2018"
    },
    {
      yield: 10.89,
      spread: 0.07,
      price: 121.02,
      date: "03/06/2016"
    },
    {
      yield: 8.85,
      spread: 6.02,
      price: 88.79,
      date: "11/09/2017"
    },
    {
      yield: 1.44,
      spread: 7.75,
      price: 106.34,
      date: "04/06/2016"
    },
    {
      yield: 2,
      spread: 6.74,
      price: 85.29,
      date: "26/08/2016"
    },
    {
      yield: 1.46,
      spread: 9.79,
      price: 111.57,
      date: "28/02/2019"
    },
    {
      yield: 14.56,
      spread: 5.6,
      price: 88.32,
      date: "08/02/2019"
    },
    {
      yield: 6.29,
      spread: 3.92,
      price: 95,
      date: "20/01/2018"
    },
    {
      yield: 4.32,
      spread: 8.01,
      price: 107.58,
      date: "24/09/2016"
    },
    {
      yield: 14.71,
      spread: 8.38,
      price: 119.63,
      date: "18/05/2018"
    },
    {
      yield: 7.81,
      spread: 9.25,
      price: 98.14,
      date: "14/04/2016"
    },
    {
      yield: 11.11,
      spread: 3.71,
      price: 108.97,
      date: "27/03/2019"
    },
    {
      yield: 13.81,
      spread: 6.68,
      price: 118.55,
      date: "18/06/2017"
    },
    {
      yield: 12.36,
      spread: 1.14,
      price: 98.91,
      date: "24/01/2017"
    },
    {
      yield: 2.57,
      spread: 2.23,
      price: 120.12,
      date: "10/12/2017"
    },
    {
      yield: 5.31,
      spread: 9.24,
      price: 108.29,
      date: "29/06/2017"
    },
    {
      yield: 10.79,
      spread: 8.32,
      price: 121.84,
      date: "15/06/2018"
    },
    {
      yield: 13.5,
      spread: 3.4,
      price: 91.8,
      date: "15/04/2017"
    },
    {
      yield: 5.76,
      spread: 2.99,
      price: 112.73,
      date: "07/05/2016"
    },
    {
      yield: 10.78,
      spread: 0.39,
      price: 92.7,
      date: "15/07/2017"
    },
    {
      yield: 1.86,
      spread: 3.76,
      price: 106.36,
      date: "18/07/2017"
    },
    {
      yield: 2.59,
      spread: 5.94,
      price: 120.27,
      date: "15/06/2018"
    },
    {
      yield: 8.99,
      spread: 8.08,
      price: 107.74,
      date: "23/09/2017"
    },
    {
      yield: 7.25,
      spread: 0.92,
      price: 114.29,
      date: "09/01/2018"
    },
    {
      yield: 2.69,
      spread: 2.95,
      price: 97.99,
      date: "03/05/2018"
    },
    {
      yield: 8.76,
      spread: 5.46,
      price: 85.12,
      date: "20/03/2018"
    },
    {
      yield: 10.25,
      spread: 4.52,
      price: 114,
      date: "21/01/2019"
    },
    {
      yield: 4.96,
      spread: 1.92,
      price: 102.96,
      date: "19/01/2017"
    },
    {
      yield: 9.7,
      spread: 4.42,
      price: 98.53,
      date: "25/09/2016"
    },
    {
      yield: 2.92,
      spread: 6.17,
      price: 86,
      date: "04/05/2017"
    },
    {
      yield: 13.99,
      spread: 8.75,
      price: 103.39,
      date: "16/10/2017"
    },
    {
      yield: 3.07,
      spread: 5.73,
      price: 94.03,
      date: "16/09/2016"
    },
    {
      yield: 7.57,
      spread: 1.82,
      price: 90.7,
      date: "14/04/2017"
    },
    {
      yield: 4.86,
      spread: 6.19,
      price: 121.72,
      date: "21/03/2017"
    },
    {
      yield: 11.74,
      spread: 1.36,
      price: 93.96,
      date: "15/01/2019"
    },
    {
      yield: 11.69,
      spread: 8.53,
      price: 91.32,
      date: "17/11/2016"
    },
    {
      yield: 6.13,
      spread: 0.2,
      price: 104.26,
      date: "16/09/2016"
    },
    {
      yield: 2.65,
      spread: 7.52,
      price: 93.21,
      date: "25/04/2016"
    },
    {
      yield: 2.19,
      spread: 3.11,
      price: 89.34,
      date: "29/04/2018"
    },
    {
      yield: 9.88,
      spread: 0.96,
      price: 123.52,
      date: "25/04/2016"
    },
    {
      yield: 2.01,
      spread: 9,
      price: 109.96,
      date: "07/11/2016"
    },
    {
      yield: 10.07,
      spread: 9.65,
      price: 99.94,
      date: "26/01/2019"
    },
    {
      yield: 13.86,
      spread: 9.28,
      price: 102.97,
      date: "13/11/2017"
    },
    {
      yield: 4.07,
      spread: 6.56,
      price: 88.55,
      date: "01/08/2016"
    },
    {
      yield: 3.27,
      spread: 8.75,
      price: 99.84,
      date: "13/03/2017"
    },
    {
      yield: 8.68,
      spread: 0.19,
      price: 118.07,
      date: "19/10/2018"
    },
    {
      yield: 4.68,
      spread: 9.79,
      price: 116.16,
      date: "16/09/2016"
    },
    {
      yield: 10.63,
      spread: 7.35,
      price: 98.28,
      date: "26/03/2019"
    },
    {
      yield: 6.09,
      spread: 6.34,
      price: 111.25,
      date: "25/04/2016"
    },
    {
      yield: 3.42,
      spread: 9.95,
      price: 100.86,
      date: "31/08/2016"
    },
    {
      yield: 11.55,
      spread: 5.75,
      price: 87.7,
      date: "07/06/2017"
    },
    {
      yield: 9.59,
      spread: 7.26,
      price: 103.74,
      date: "12/08/2016"
    },
    {
      yield: 5.17,
      spread: 5.49,
      price: 111.94,
      date: "27/08/2017"
    },
    {
      yield: 1.83,
      spread: 9.8,
      price: 111.61,
      date: "07/07/2018"
    },
    {
      yield: 6.13,
      spread: 7.18,
      price: 93.21,
      date: "13/10/2017"
    },
    {
      yield: 12.87,
      spread: 9.57,
      price: 104.98,
      date: "23/09/2017"
    },
    {
      yield: 5.54,
      spread: 3.18,
      price: 101.76,
      date: "19/12/2018"
    },
    {
      yield: 5.43,
      spread: 6.22,
      price: 98.37,
      date: "15/01/2019"
    },
    {
      yield: 5.63,
      spread: 9.5,
      price: 115.96,
      date: "01/10/2018"
    },
    {
      yield: 4.55,
      spread: 2.93,
      price: 94.14,
      date: "26/07/2018"
    },
    {
      yield: 13.43,
      spread: 6.61,
      price: 90.86,
      date: "30/01/2018"
    },
    {
      yield: 7.41,
      spread: 9.69,
      price: 85.54,
      date: "16/12/2017"
    },
    {
      yield: 14.69,
      spread: 0.84,
      price: 111.41,
      date: "27/10/2017"
    },
    {
      yield: 3.3,
      spread: 1.55,
      price: 119.94,
      date: "14/01/2017"
    },
    {
      yield: 9.87,
      spread: 8.41,
      price: 110.72,
      date: "05/10/2018"
    },
    {
      yield: 8.19,
      spread: 0.85,
      price: 123.05,
      date: "28/01/2018"
    },
    {
      yield: 7.18,
      spread: 2.72,
      price: 116.72,
      date: "14/08/2016"
    },
    {
      yield: 4.86,
      spread: 7.97,
      price: 111.5,
      date: "10/05/2016"
    },
    {
      yield: 4.22,
      spread: 9.01,
      price: 97.64,
      date: "03/12/2017"
    },
    {
      yield: 5,
      spread: 9.15,
      price: 90.74,
      date: "02/09/2018"
    },
    {
      yield: 5.33,
      spread: 1.64,
      price: 104.39,
      date: "14/02/2017"
    },
    {
      yield: 3.96,
      spread: 3.26,
      price: 110.67,
      date: "26/08/2016"
    },
    {
      yield: 5.43,
      spread: 7.87,
      price: 123.19,
      date: "18/11/2016"
    },
    {
      yield: 3.07,
      spread: 9.92,
      price: 123.54,
      date: "02/11/2016"
    },
    {
      yield: 11.1,
      spread: 4.33,
      price: 92.21,
      date: "26/09/2018"
    },
    {
      yield: 11.39,
      spread: 1.29,
      price: 123.48,
      date: "29/01/2017"
    },
    {
      yield: 13.25,
      spread: 3.29,
      price: 113.44,
      date: "30/03/2019"
    },
    {
      yield: 12.65,
      spread: 9.73,
      price: 111.1,
      date: "22/08/2018"
    },
    {
      yield: 14.76,
      spread: 3.49,
      price: 94.34,
      date: "25/11/2016"
    },
    {
      yield: 9.07,
      spread: 6.23,
      price: 115.07,
      date: "25/09/2018"
    },
    {
      yield: 9,
      spread: 8.41,
      price: 123.29,
      date: "19/07/2018"
    },
    {
      yield: 2.05,
      spread: 2.15,
      price: 108.14,
      date: "30/08/2016"
    },
    {
      yield: 12.65,
      spread: 3.77,
      price: 121.08,
      date: "18/05/2016"
    },
    {
      yield: 7.16,
      spread: 5.63,
      price: 124.29,
      date: "07/07/2017"
    },
    {
      yield: 11.83,
      spread: 7.7,
      price: 103.34,
      date: "04/04/2018"
    },
    {
      yield: 2.2,
      spread: 8.13,
      price: 90.17,
      date: "28/07/2016"
    },
    {
      yield: 4.15,
      spread: 5.82,
      price: 101.34,
      date: "17/05/2018"
    },
    {
      yield: 1.44,
      spread: 0.98,
      price: 86.37,
      date: "02/09/2018"
    },
    {
      yield: 11.64,
      spread: 0.87,
      price: 105.28,
      date: "25/11/2016"
    },
    {
      yield: 10.89,
      spread: 9.7,
      price: 104.78,
      date: "10/01/2018"
    },
    {
      yield: 2.06,
      spread: 5.19,
      price: 101.71,
      date: "04/06/2016"
    },
    {
      yield: 2.61,
      spread: 5.83,
      price: 116.57,
      date: "23/12/2016"
    },
    {
      yield: 6.94,
      spread: 9.83,
      price: 115.69,
      date: "17/11/2018"
    },
    {
      yield: 5.48,
      spread: 5.8,
      price: 101.31,
      date: "12/02/2018"
    },
    {
      yield: 2.3,
      spread: 6.69,
      price: 101.52,
      date: "24/04/2018"
    },
    {
      yield: 14.89,
      spread: 7.32,
      price: 108.13,
      date: "10/12/2018"
    },
    {
      yield: 4.63,
      spread: 0.69,
      price: 86.81,
      date: "11/03/2019"
    },
    {
      yield: 11.56,
      spread: 1.52,
      price: 119.44,
      date: "13/09/2016"
    },
    {
      yield: 4.97,
      spread: 5.38,
      price: 90.74,
      date: "06/04/2019"
    },
    {
      yield: 9.32,
      spread: 6.26,
      price: 105.16,
      date: "26/03/2019"
    },
    {
      yield: 13.16,
      spread: 3.15,
      price: 91.95,
      date: "11/04/2018"
    },
    {
      yield: 7.57,
      spread: 2.88,
      price: 119.86,
      date: "23/04/2018"
    },
    {
      yield: 14.27,
      spread: 9.89,
      price: 120.54,
      date: "15/12/2017"
    },
    {
      yield: 7.17,
      spread: 9.82,
      price: 106.45,
      date: "11/10/2018"
    },
    {
      yield: 13.18,
      spread: 8.41,
      price: 86.76,
      date: "14/09/2018"
    },
    {
      yield: 8.96,
      spread: 1.51,
      price: 98.43,
      date: "14/05/2016"
    },
    {
      yield: 6.55,
      spread: 3.16,
      price: 118.94,
      date: "08/06/2017"
    },
    {
      yield: 2.22,
      spread: 7.74,
      price: 122.11,
      date: "16/10/2018"
    },
    {
      yield: 10.45,
      spread: 6.62,
      price: 115.18,
      date: "10/10/2018"
    },
    {
      yield: 11.67,
      spread: 3.25,
      price: 123.62,
      date: "07/07/2018"
    },
    {
      yield: 5.37,
      spread: 4.22,
      price: 87.47,
      date: "30/11/2018"
    },
    {
      yield: 9.05,
      spread: 2.17,
      price: 96.21,
      date: "16/01/2019"
    },
    {
      yield: 11.27,
      spread: 8.79,
      price: 117.49,
      date: "02/05/2017"
    },
    {
      yield: 13.83,
      spread: 4.99,
      price: 115.25,
      date: "06/05/2017"
    },
    {
      yield: 1.89,
      spread: 4.25,
      price: 109.73,
      date: "26/06/2016"
    },
    {
      yield: 6.95,
      spread: 6.35,
      price: 112.07,
      date: "06/05/2017"
    },
    {
      yield: 2.42,
      spread: 2.83,
      price: 109.1,
      date: "10/09/2016"
    },
    {
      yield: 7.33,
      spread: 6.73,
      price: 101.17,
      date: "08/11/2017"
    },
    {
      yield: 12.28,
      spread: 0.3,
      price: 89.72,
      date: "27/09/2017"
    },
    {
      yield: 8.71,
      spread: 0.41,
      price: 87.66,
      date: "27/07/2017"
    },
    {
      yield: 8.08,
      spread: 5.96,
      price: 108.12,
      date: "03/10/2017"
    },
    {
      yield: 8.03,
      spread: 3.03,
      price: 100.03,
      date: "13/05/2016"
    },
    {
      yield: 11.15,
      spread: 6.72,
      price: 123.92,
      date: "19/12/2018"
    },
    {
      yield: 1.1,
      spread: 2.28,
      price: 119.15,
      date: "29/06/2017"
    },
    {
      yield: 9.11,
      spread: 5.25,
      price: 85.3,
      date: "31/01/2019"
    },
    {
      yield: 3.32,
      spread: 5.52,
      price: 113.29,
      date: "30/11/2018"
    },
    {
      yield: 5.97,
      spread: 0.54,
      price: 98.38,
      date: "22/03/2018"
    },
    {
      yield: 3.67,
      spread: 8.58,
      price: 102.92,
      date: "16/03/2019"
    },
    {
      yield: 4.6,
      spread: 2.25,
      price: 124.46,
      date: "17/09/2018"
    },
    {
      yield: 5.32,
      spread: 9.76,
      price: 88.85,
      date: "10/10/2016"
    },
    {
      yield: 14.06,
      spread: 4.16,
      price: 95.54,
      date: "21/10/2016"
    },
    {
      yield: 12.86,
      spread: 5.63,
      price: 105.56,
      date: "27/04/2018"
    },
    {
      yield: 6.8,
      spread: 8.65,
      price: 118.77,
      date: "11/04/2017"
    },
    {
      yield: 6.21,
      spread: 7.64,
      price: 105.2,
      date: "17/12/2017"
    },
    {
      yield: 14.14,
      spread: 3.23,
      price: 88.38,
      date: "29/04/2016"
    },
    {
      yield: 7.1,
      spread: 0.43,
      price: 97.86,
      date: "30/01/2019"
    },
    {
      yield: 14.11,
      spread: 6.51,
      price: 90.58,
      date: "03/01/2017"
    },
    {
      yield: 9.33,
      spread: 4.47,
      price: 98.79,
      date: "28/06/2017"
    },
    {
      yield: 11.62,
      spread: 3.36,
      price: 123.06,
      date: "06/01/2017"
    },
    {
      yield: 9.7,
      spread: 6.8,
      price: 107.46,
      date: "12/11/2018"
    },
    {
      yield: 5,
      spread: 0.16,
      price: 87.07,
      date: "10/05/2016"
    },
    {
      yield: 5.94,
      spread: 1.77,
      price: 101.34,
      date: "07/08/2016"
    },
    {
      yield: 5.49,
      spread: 5.61,
      price: 116.07,
      date: "23/07/2017"
    },
    {
      yield: 2.18,
      spread: 3.58,
      price: 119.78,
      date: "17/10/2017"
    },
    {
      yield: 13.98,
      spread: 9.17,
      price: 114.81,
      date: "07/02/2019"
    },
    {
      yield: 2.89,
      spread: 2.1,
      price: 116.26,
      date: "03/05/2018"
    },
    {
      yield: 11.41,
      spread: 3.72,
      price: 89.55,
      date: "13/08/2018"
    },
    {
      yield: 5.84,
      spread: 7.78,
      price: 121.38,
      date: "19/05/2018"
    },
    {
      yield: 6.95,
      spread: 3.91,
      price: 109.11,
      date: "27/06/2016"
    },
    {
      yield: 5.71,
      spread: 3.05,
      price: 89.16,
      date: "14/06/2016"
    },
    {
      yield: 12.39,
      spread: 0.85,
      price: 106.72,
      date: "11/07/2018"
    },
    {
      yield: 5.49,
      spread: 3.07,
      price: 102.82,
      date: "13/10/2018"
    },
    {
      yield: 3.8,
      spread: 4.65,
      price: 111.8,
      date: "19/02/2018"
    },
    {
      yield: 7.06,
      spread: 7.36,
      price: 118.21,
      date: "02/08/2017"
    },
    {
      yield: 14.54,
      spread: 3.25,
      price: 104.64,
      date: "13/11/2016"
    },
    {
      yield: 7.19,
      spread: 4,
      price: 119.65,
      date: "06/03/2018"
    },
    {
      yield: 2.99,
      spread: 2.55,
      price: 87.67,
      date: "07/04/2019"
    },
    {
      yield: 11.33,
      spread: 6,
      price: 96.05,
      date: "15/02/2018"
    },
    {
      yield: 5.32,
      spread: 0.74,
      price: 106.35,
      date: "06/09/2017"
    },
    {
      yield: 11.43,
      spread: 2.08,
      price: 100.79,
      date: "21/08/2017"
    },
    {
      yield: 3.02,
      spread: 4.53,
      price: 89.49,
      date: "29/05/2018"
    },
    {
      yield: 13.53,
      spread: 8.76,
      price: 124.2,
      date: "02/01/2017"
    },
    {
      yield: 1.8,
      spread: 3.79,
      price: 100.29,
      date: "07/09/2016"
    },
    {
      yield: 2.07,
      spread: 6.28,
      price: 115.63,
      date: "04/12/2016"
    },
    {
      yield: 4.58,
      spread: 1.81,
      price: 106.22,
      date: "21/04/2018"
    },
    {
      yield: 13.43,
      spread: 1.01,
      price: 116.29,
      date: "26/10/2018"
    },
    {
      yield: 8.98,
      spread: 7.54,
      price: 99.11,
      date: "04/12/2016"
    },
    {
      yield: 3.64,
      spread: 2.72,
      price: 101.51,
      date: "08/10/2018"
    },
    {
      yield: 10.82,
      spread: 6.21,
      price: 85.29,
      date: "31/12/2017"
    },
    {
      yield: 4.45,
      spread: 1.09,
      price: 114.9,
      date: "24/06/2016"
    },
    {
      yield: 5.07,
      spread: 3.17,
      price: 122.04,
      date: "12/09/2017"
    },
    {
      yield: 11.43,
      spread: 0.87,
      price: 111.34,
      date: "23/04/2017"
    },
    {
      yield: 8.77,
      spread: 6.53,
      price: 91.02,
      date: "04/09/2016"
    },
    {
      yield: 10.67,
      spread: 5.85,
      price: 118.96,
      date: "07/11/2017"
    },
    {
      yield: 3.79,
      spread: 1.9,
      price: 103.27,
      date: "16/10/2017"
    },
    {
      yield: 8.99,
      spread: 4.31,
      price: 114.66,
      date: "19/10/2018"
    },
    {
      yield: 8.2,
      spread: 5.12,
      price: 114.59,
      date: "15/05/2018"
    },
    {
      yield: 3.67,
      spread: 0.7,
      price: 111.91,
      date: "12/04/2018"
    },
    {
      yield: 7.86,
      spread: 5.69,
      price: 108.23,
      date: "16/01/2019"
    },
    {
      yield: 11.79,
      spread: 0.29,
      price: 115.17,
      date: "18/06/2018"
    },
    {
      yield: 10.7,
      spread: 7.56,
      price: 99.79,
      date: "19/12/2018"
    },
    {
      yield: 7.59,
      spread: 2.52,
      price: 122.12,
      date: "14/04/2017"
    },
    {
      yield: 6.28,
      spread: 7.92,
      price: 122.24,
      date: "04/06/2018"
    },
    {
      yield: 10.08,
      spread: 8.95,
      price: 101.62,
      date: "12/03/2017"
    },
    {
      yield: 9.11,
      spread: 6.63,
      price: 100.33,
      date: "04/04/2018"
    },
    {
      yield: 7.99,
      spread: 6.71,
      price: 114.84,
      date: "21/03/2017"
    },
    {
      yield: 10.69,
      spread: 9.72,
      price: 115.3,
      date: "13/08/2017"
    },
    {
      yield: 1.07,
      spread: 0.19,
      price: 104.61,
      date: "11/08/2016"
    },
    {
      yield: 4.31,
      spread: 4.92,
      price: 100.94,
      date: "30/01/2019"
    },
    {
      yield: 14.74,
      spread: 3.18,
      price: 92.28,
      date: "19/03/2019"
    },
    {
      yield: 7.8,
      spread: 2.24,
      price: 91.17,
      date: "09/09/2016"
    },
    {
      yield: 2.4,
      spread: 5.13,
      price: 124.94,
      date: "19/10/2018"
    },
    {
      yield: 9.45,
      spread: 3.9,
      price: 108.28,
      date: "11/03/2019"
    },
    {
      yield: 2.67,
      spread: 9.67,
      price: 113.47,
      date: "16/08/2018"
    },
    {
      yield: 3.06,
      spread: 6.23,
      price: 110.96,
      date: "20/01/2018"
    },
    {
      yield: 6.45,
      spread: 9.11,
      price: 99.16,
      date: "03/09/2017"
    },
    {
      yield: 13.7,
      spread: 8.41,
      price: 116.23,
      date: "25/12/2018"
    },
    {
      yield: 8,
      spread: 3.48,
      price: 89.75,
      date: "21/06/2018"
    },
    {
      yield: 14.83,
      spread: 6.33,
      price: 88.92,
      date: "28/06/2016"
    },
    {
      yield: 3.63,
      spread: 7.45,
      price: 110.96,
      date: "10/10/2018"
    },
    {
      yield: 10.1,
      spread: 8.4,
      price: 116.36,
      date: "26/10/2017"
    },
    {
      yield: 10.12,
      spread: 7.85,
      price: 107.28,
      date: "27/10/2018"
    },
    {
      yield: 6.07,
      spread: 8.89,
      price: 124.47,
      date: "20/09/2018"
    },
    {
      yield: 10.58,
      spread: 9.64,
      price: 104.09,
      date: "17/10/2016"
    },
    {
      yield: 8.3,
      spread: 2.49,
      price: 100.03,
      date: "02/08/2017"
    },
    {
      yield: 4.26,
      spread: 0.44,
      price: 119.72,
      date: "02/06/2018"
    },
    {
      yield: 10.63,
      spread: 4.33,
      price: 110.9,
      date: "15/10/2018"
    },
    {
      yield: 13.59,
      spread: 7.65,
      price: 105.94,
      date: "20/04/2016"
    },
    {
      yield: 9.69,
      spread: 5.94,
      price: 87.41,
      date: "20/04/2017"
    },
    {
      yield: 4.83,
      spread: 4.42,
      price: 98.47,
      date: "11/03/2019"
    },
    {
      yield: 6.79,
      spread: 9.94,
      price: 98.2,
      date: "17/07/2017"
    },
    {
      yield: 8.27,
      spread: 8.76,
      price: 120.16,
      date: "18/06/2016"
    },
    {
      yield: 14.35,
      spread: 1.97,
      price: 124.22,
      date: "14/09/2017"
    },
    {
      yield: 7.22,
      spread: 1.11,
      price: 100.96,
      date: "24/01/2017"
    },
    {
      yield: 10.04,
      spread: 6.59,
      price: 113.77,
      date: "15/09/2018"
    },
    {
      yield: 9.49,
      spread: 2.53,
      price: 117.8,
      date: "13/02/2018"
    },
    {
      yield: 5.51,
      spread: 1.94,
      price: 88.7,
      date: "07/01/2018"
    },
    {
      yield: 11.32,
      spread: 6.81,
      price: 124.5,
      date: "23/03/2019"
    },
    {
      yield: 11.67,
      spread: 3.33,
      price: 106.83,
      date: "02/10/2018"
    },
    {
      yield: 7.18,
      spread: 3.73,
      price: 91.73,
      date: "12/03/2017"
    },
    {
      yield: 7.71,
      spread: 4.62,
      price: 121.58,
      date: "14/01/2018"
    },
    {
      yield: 3.44,
      spread: 0.27,
      price: 115.79,
      date: "07/06/2017"
    },
    {
      yield: 5.25,
      spread: 8.47,
      price: 116.8,
      date: "28/01/2017"
    },
    {
      yield: 7.5,
      spread: 5.14,
      price: 115.27,
      date: "03/12/2017"
    },
    {
      yield: 3.44,
      spread: 5.09,
      price: 88.85,
      date: "24/03/2019"
    },
    {
      yield: 10.4,
      spread: 3.71,
      price: 105.44,
      date: "20/12/2018"
    },
    {
      yield: 6.15,
      spread: 5.94,
      price: 116.1,
      date: "26/02/2018"
    },
    {
      yield: 10.51,
      spread: 3.58,
      price: 101.8,
      date: "24/07/2016"
    },
    {
      yield: 1.4,
      spread: 2.51,
      price: 100.79,
      date: "20/03/2019"
    },
    {
      yield: 10.07,
      spread: 5.22,
      price: 100.37,
      date: "12/11/2018"
    },
    {
      yield: 2.77,
      spread: 1.73,
      price: 114.94,
      date: "24/04/2017"
    },
    {
      yield: 8.59,
      spread: 3.24,
      price: 95.89,
      date: "27/09/2016"
    },
    {
      yield: 2.21,
      spread: 1.03,
      price: 88.72,
      date: "25/02/2017"
    },
    {
      yield: 7.31,
      spread: 7.95,
      price: 121.74,
      date: "20/01/2019"
    },
    {
      yield: 9.05,
      spread: 5.67,
      price: 86.4,
      date: "01/09/2017"
    },
    {
      yield: 8.89,
      spread: 5.01,
      price: 102.17,
      date: "03/04/2018"
    },
    {
      yield: 5.04,
      spread: 4.08,
      price: 97.12,
      date: "06/12/2017"
    },
    {
      yield: 2.76,
      spread: 0.03,
      price: 113.76,
      date: "29/10/2018"
    },
    {
      yield: 5.93,
      spread: 9.17,
      price: 93.75,
      date: "23/07/2016"
    },
    {
      yield: 14.21,
      spread: 9.84,
      price: 97.38,
      date: "13/04/2016"
    },
    {
      yield: 7.6,
      spread: 6.39,
      price: 96.11,
      date: "14/12/2018"
    },
    {
      yield: 7.02,
      spread: 2.83,
      price: 120.93,
      date: "27/02/2019"
    },
    {
      yield: 13.96,
      spread: 0.23,
      price: 100.41,
      date: "09/09/2018"
    },
    {
      yield: 10.78,
      spread: 4.01,
      price: 95.61,
      date: "21/07/2017"
    },
    {
      yield: 12.35,
      spread: 4.92,
      price: 108.13,
      date: "11/07/2018"
    },
    {
      yield: 6.53,
      spread: 0.24,
      price: 111.64,
      date: "14/02/2018"
    },
    {
      yield: 5.06,
      spread: 6.81,
      price: 89.07,
      date: "19/06/2017"
    },
    {
      yield: 3.37,
      spread: 3.77,
      price: 96.86,
      date: "10/10/2018"
    },
    {
      yield: 3.29,
      spread: 7.21,
      price: 114.35,
      date: "21/03/2019"
    },
    {
      yield: 7.93,
      spread: 8.72,
      price: 106.69,
      date: "02/06/2017"
    },
    {
      yield: 4.79,
      spread: 2.43,
      price: 102.07,
      date: "04/03/2018"
    },
    {
      yield: 2.61,
      spread: 7.91,
      price: 87.7,
      date: "02/02/2017"
    },
    {
      yield: 13.34,
      spread: 2.13,
      price: 104.4,
      date: "15/05/2018"
    },
    {
      yield: 3.22,
      spread: 9.89,
      price: 91.94,
      date: "29/01/2017"
    },
    {
      yield: 5.93,
      spread: 4.8,
      price: 104.18,
      date: "26/01/2019"
    },
    {
      yield: 5.9,
      spread: 0.17,
      price: 91.6,
      date: "27/06/2016"
    },
    {
      yield: 11.1,
      spread: 9.52,
      price: 121.43,
      date: "29/07/2018"
    },
    {
      yield: 13.04,
      spread: 5.01,
      price: 119.49,
      date: "29/04/2017"
    },
    {
      yield: 8.36,
      spread: 0.54,
      price: 123.39,
      date: "17/01/2017"
    },
    {
      yield: 9.2,
      spread: 9.01,
      price: 116.67,
      date: "27/04/2017"
    },
    {
      yield: 1.84,
      spread: 3.97,
      price: 92.17,
      date: "14/05/2016"
    },
    {
      yield: 12.91,
      spread: 8.41,
      price: 117.78,
      date: "06/07/2018"
    },
    {
      yield: 12.36,
      spread: 9.4,
      price: 96.87,
      date: "15/11/2018"
    },
    {
      yield: 14.55,
      spread: 0.84,
      price: 109.92,
      date: "16/06/2018"
    },
    {
      yield: 4.43,
      spread: 5.56,
      price: 93.12,
      date: "12/12/2017"
    },
    {
      yield: 4.28,
      spread: 3.45,
      price: 111.82,
      date: "03/08/2018"
    },
    {
      yield: 14.66,
      spread: 0.61,
      price: 111.16,
      date: "08/01/2017"
    },
    {
      yield: 6.59,
      spread: 8.9,
      price: 99.14,
      date: "08/03/2017"
    },
    {
      yield: 11.96,
      spread: 8.96,
      price: 123.76,
      date: "11/11/2017"
    },
    {
      yield: 2.09,
      spread: 7.76,
      price: 88.96,
      date: "02/10/2018"
    },
    {
      yield: 12.66,
      spread: 6.39,
      price: 96.62,
      date: "14/03/2019"
    },
    {
      yield: 6.08,
      spread: 7.62,
      price: 87.53,
      date: "24/10/2016"
    },
    {
      yield: 5.78,
      spread: 4.35,
      price: 99.09,
      date: "11/01/2018"
    },
    {
      yield: 10.66,
      spread: 9.03,
      price: 93.81,
      date: "19/07/2018"
    },
    {
      yield: 14,
      spread: 3.52,
      price: 101.86,
      date: "03/09/2016"
    },
    {
      yield: 14,
      spread: 6.02,
      price: 96.2,
      date: "08/02/2018"
    },
    {
      yield: 9.8,
      spread: 2.06,
      price: 96.06,
      date: "29/10/2016"
    },
    {
      yield: 5.24,
      spread: 5.73,
      price: 116.6,
      date: "25/02/2017"
    },
    {
      yield: 3.25,
      spread: 2.86,
      price: 85.12,
      date: "24/12/2018"
    },
    {
      yield: 7.06,
      spread: 1.18,
      price: 113.89,
      date: "27/07/2017"
    },
    {
      yield: 9.11,
      spread: 8.24,
      price: 117.75,
      date: "09/05/2016"
    },
    {
      yield: 10.33,
      spread: 1,
      price: 112.93,
      date: "11/11/2016"
    },
    {
      yield: 5.05,
      spread: 1.09,
      price: 112.11,
      date: "05/10/2018"
    },
    {
      yield: 9.87,
      spread: 5.35,
      price: 96.43,
      date: "19/05/2016"
    },
    {
      yield: 6.21,
      spread: 1.25,
      price: 100.41,
      date: "15/04/2016"
    },
    {
      yield: 7.58,
      spread: 5.97,
      price: 87.32,
      date: "26/12/2018"
    },
    {
      yield: 2.7,
      spread: 5.64,
      price: 107.22,
      date: "03/10/2018"
    },
    {
      yield: 1.5,
      spread: 3.45,
      price: 121.02,
      date: "13/04/2018"
    },
    {
      yield: 6.03,
      spread: 8.21,
      price: 114.5,
      date: "10/11/2017"
    },
    {
      yield: 11.79,
      spread: 0.51,
      price: 87.52,
      date: "05/04/2018"
    },
    {
      yield: 11.42,
      spread: 9.88,
      price: 121.04,
      date: "12/11/2016"
    },
    {
      yield: 8.28,
      spread: 0.36,
      price: 90.67,
      date: "10/04/2017"
    },
    {
      yield: 9.17,
      spread: 5.05,
      price: 96.09,
      date: "23/12/2017"
    },
    {
      yield: 13.66,
      spread: 0.24,
      price: 110.79,
      date: "30/08/2016"
    },
    {
      yield: 5.53,
      spread: 7.28,
      price: 114.53,
      date: "11/09/2016"
    },
    {
      yield: 3.04,
      spread: 2.15,
      price: 119.18,
      date: "05/02/2019"
    },
    {
      yield: 6.27,
      spread: 0.41,
      price: 87.64,
      date: "14/12/2016"
    },
    {
      yield: 10.68,
      spread: 0.91,
      price: 104.88,
      date: "06/06/2017"
    },
    {
      yield: 10.46,
      spread: 0.63,
      price: 113.65,
      date: "22/10/2017"
    },
    {
      yield: 5.02,
      spread: 5.7,
      price: 119.33,
      date: "08/10/2018"
    },
    {
      yield: 11.35,
      spread: 1.38,
      price: 108.01,
      date: "04/05/2018"
    },
    {
      yield: 1.77,
      spread: 9.05,
      price: 107.77,
      date: "03/01/2019"
    },
    {
      yield: 7.88,
      spread: 6.56,
      price: 122.07,
      date: "01/10/2017"
    },
    {
      yield: 3.4,
      spread: 5.85,
      price: 86.92,
      date: "21/02/2018"
    },
    {
      yield: 4.46,
      spread: 3.16,
      price: 108.67,
      date: "07/05/2017"
    },
    {
      yield: 3.37,
      spread: 8.29,
      price: 95.74,
      date: "06/03/2019"
    },
    {
      yield: 9.49,
      spread: 2.24,
      price: 99.78,
      date: "07/07/2018"
    },
    {
      yield: 13.04,
      spread: 3.36,
      price: 113.32,
      date: "13/07/2018"
    },
    {
      yield: 3.52,
      spread: 6.38,
      price: 119.17,
      date: "31/12/2017"
    },
    {
      yield: 1.93,
      spread: 6.11,
      price: 120.43,
      date: "13/08/2017"
    },
    {
      yield: 6.21,
      spread: 8.78,
      price: 104.01,
      date: "12/11/2017"
    },
    {
      yield: 9.79,
      spread: 9.63,
      price: 120.21,
      date: "30/05/2017"
    },
    {
      yield: 5.63,
      spread: 5.85,
      price: 87.25,
      date: "05/01/2018"
    },
    {
      yield: 5.52,
      spread: 2.27,
      price: 110.33,
      date: "30/09/2016"
    },
    {
      yield: 9.74,
      spread: 5.75,
      price: 105.17,
      date: "14/01/2018"
    },
    {
      yield: 13.68,
      spread: 5.03,
      price: 111.19,
      date: "07/06/2018"
    },
    {
      yield: 8.9,
      spread: 3.44,
      price: 114.43,
      date: "03/01/2019"
    },
    {
      yield: 9.79,
      spread: 1.15,
      price: 96.67,
      date: "11/04/2018"
    },
    {
      yield: 10,
      spread: 7.07,
      price: 114.52,
      date: "15/09/2016"
    },
    {
      yield: 7.78,
      spread: 1.32,
      price: 101.7,
      date: "19/03/2019"
    },
    {
      yield: 5.27,
      spread: 0.77,
      price: 86.64,
      date: "28/11/2018"
    },
    {
      yield: 7.76,
      spread: 2.95,
      price: 123.2,
      date: "14/12/2017"
    },
    {
      yield: 1.05,
      spread: 3.66,
      price: 96.41,
      date: "30/05/2016"
    },
    {
      yield: 8.35,
      spread: 7.98,
      price: 92,
      date: "02/01/2018"
    },
    {
      yield: 5.82,
      spread: 2.26,
      price: 106.9,
      date: "15/04/2018"
    },
    {
      yield: 4.2,
      spread: 0.02,
      price: 111.72,
      date: "03/11/2018"
    },
    {
      yield: 1.22,
      spread: 9.63,
      price: 124.26,
      date: "08/04/2017"
    },
    {
      yield: 2.15,
      spread: 6.93,
      price: 94.93,
      date: "24/01/2019"
    },
    {
      yield: 10.32,
      spread: 5.58,
      price: 113.06,
      date: "29/03/2018"
    },
    {
      yield: 8.25,
      spread: 1.82,
      price: 92.92,
      date: "06/06/2018"
    },
    {
      yield: 14.61,
      spread: 9.03,
      price: 92.3,
      date: "02/11/2018"
    },
    {
      yield: 4.45,
      spread: 0.97,
      price: 87.09,
      date: "11/01/2017"
    },
    {
      yield: 14.21,
      spread: 2.56,
      price: 121.03,
      date: "26/06/2016"
    },
    {
      yield: 11.88,
      spread: 3.37,
      price: 85.2,
      date: "12/10/2018"
    },
    {
      yield: 10.05,
      spread: 8.72,
      price: 98.51,
      date: "15/04/2018"
    },
    {
      yield: 3.99,
      spread: 8.97,
      price: 95.09,
      date: "21/11/2017"
    },
    {
      yield: 12.89,
      spread: 5.09,
      price: 118.36,
      date: "21/02/2018"
    },
    {
      yield: 9.23,
      spread: 5.25,
      price: 95.19,
      date: "15/05/2018"
    },
    {
      yield: 13.46,
      spread: 7.97,
      price: 119.1,
      date: "03/05/2016"
    },
    {
      yield: 4.6,
      spread: 4.5,
      price: 112.13,
      date: "11/03/2018"
    },
    {
      yield: 8.36,
      spread: 7.89,
      price: 111.77,
      date: "14/07/2017"
    },
    {
      yield: 4.17,
      spread: 8.95,
      price: 109.91,
      date: "01/07/2016"
    },
    {
      yield: 12.17,
      spread: 3.47,
      price: 89.03,
      date: "10/01/2017"
    },
    {
      yield: 13.72,
      spread: 4.97,
      price: 111.67,
      date: "26/01/2017"
    },
    {
      yield: 3.52,
      spread: 9.35,
      price: 85.52,
      date: "27/02/2017"
    },
    {
      yield: 8.05,
      spread: 0.38,
      price: 118.18,
      date: "19/09/2018"
    },
    {
      yield: 14.67,
      spread: 8.94,
      price: 105.02,
      date: "19/10/2016"
    },
    {
      yield: 5.87,
      spread: 8.36,
      price: 122.18,
      date: "21/04/2016"
    },
    {
      yield: 7.4,
      spread: 1.23,
      price: 94.26,
      date: "05/06/2017"
    },
    {
      yield: 2.03,
      spread: 3.54,
      price: 93.71,
      date: "20/08/2016"
    },
    {
      yield: 8.42,
      spread: 9.62,
      price: 88.76,
      date: "13/07/2016"
    },
    {
      yield: 2.83,
      spread: 5.09,
      price: 107.89,
      date: "10/05/2016"
    },
    {
      yield: 2.61,
      spread: 5.08,
      price: 122.69,
      date: "12/01/2017"
    },
    {
      yield: 3.33,
      spread: 5.71,
      price: 92.77,
      date: "23/01/2019"
    },
    {
      yield: 4.34,
      spread: 6.95,
      price: 100.35,
      date: "09/04/2019"
    },
    {
      yield: 11.91,
      spread: 5.64,
      price: 107.04,
      date: "27/04/2017"
    },
    {
      yield: 3.66,
      spread: 4.89,
      price: 115.97,
      date: "25/06/2016"
    },
    {
      yield: 5.46,
      spread: 0.89,
      price: 93.28,
      date: "03/03/2018"
    },
    {
      yield: 4.66,
      spread: 1.73,
      price: 109.47,
      date: "30/05/2016"
    },
    {
      yield: 14.06,
      spread: 2.35,
      price: 91.38,
      date: "31/05/2017"
    },
    {
      yield: 7.02,
      spread: 9.56,
      price: 90.21,
      date: "02/04/2019"
    },
    {
      yield: 7.56,
      spread: 1.95,
      price: 122.07,
      date: "13/07/2016"
    },
    {
      yield: 4.4,
      spread: 4.43,
      price: 110.65,
      date: "10/12/2017"
    },
    {
      yield: 6.45,
      spread: 1.56,
      price: 88.06,
      date: "22/11/2018"
    },
    {
      yield: 2.08,
      spread: 4.95,
      price: 112.5,
      date: "09/09/2018"
    },
    {
      yield: 7.17,
      spread: 8.14,
      price: 107.3,
      date: "14/03/2017"
    },
    {
      yield: 7.81,
      spread: 9.09,
      price: 108.33,
      date: "11/03/2019"
    },
    {
      yield: 11.39,
      spread: 0.86,
      price: 102.75,
      date: "15/06/2017"
    },
    {
      yield: 5.85,
      spread: 8.73,
      price: 103.97,
      date: "01/12/2016"
    },
    {
      yield: 6.65,
      spread: 8.56,
      price: 85.34,
      date: "10/06/2016"
    },
    {
      yield: 7.71,
      spread: 4.82,
      price: 122.5,
      date: "31/03/2018"
    },
    {
      yield: 5.48,
      spread: 5.17,
      price: 87.49,
      date: "06/02/2017"
    },
    {
      yield: 12.3,
      spread: 5.48,
      price: 122.39,
      date: "26/10/2017"
    },
    {
      yield: 6.03,
      spread: 3.9,
      price: 100.51,
      date: "11/02/2019"
    },
    {
      yield: 14.95,
      spread: 1.43,
      price: 111.75,
      date: "04/12/2016"
    },
    {
      yield: 4.42,
      spread: 5.4,
      price: 115.6,
      date: "09/08/2018"
    },
    {
      yield: 13.27,
      spread: 7.44,
      price: 88.86,
      date: "30/09/2018"
    },
    {
      yield: 7.7,
      spread: 7.99,
      price: 91.06,
      date: "25/05/2016"
    },
    {
      yield: 6.12,
      spread: 4.19,
      price: 86.86,
      date: "17/10/2016"
    },
    {
      yield: 12.37,
      spread: 8.27,
      price: 90.52,
      date: "08/07/2018"
    },
    {
      yield: 4.63,
      spread: 4.59,
      price: 102.84,
      date: "21/07/2018"
    },
    {
      yield: 3.41,
      spread: 9.6,
      price: 88.25,
      date: "23/10/2018"
    },
    {
      yield: 12.84,
      spread: 1.49,
      price: 102.42,
      date: "04/09/2017"
    },
    {
      yield: 9.54,
      spread: 0.25,
      price: 102.49,
      date: "11/08/2018"
    },
    {
      yield: 13.4,
      spread: 5.1,
      price: 94.9,
      date: "02/10/2018"
    },
    {
      yield: 1.38,
      spread: 6.79,
      price: 111.56,
      date: "23/10/2018"
    },
    {
      yield: 11.99,
      spread: 7.39,
      price: 110.02,
      date: "26/03/2017"
    },
    {
      yield: 13.85,
      spread: 1.07,
      price: 117.72,
      date: "19/06/2018"
    },
    {
      yield: 14.45,
      spread: 0.17,
      price: 114.46,
      date: "20/09/2017"
    },
    {
      yield: 14.03,
      spread: 2.52,
      price: 88.88,
      date: "25/11/2018"
    },
    {
      yield: 1.24,
      spread: 9.58,
      price: 116.67,
      date: "04/12/2017"
    },
    {
      yield: 6.09,
      spread: 1.51,
      price: 101.12,
      date: "26/09/2016"
    },
    {
      yield: 9.75,
      spread: 1.4,
      price: 120.71,
      date: "17/08/2016"
    },
    {
      yield: 9.32,
      spread: 0.61,
      price: 120.15,
      date: "17/06/2018"
    },
    {
      yield: 7.45,
      spread: 4.22,
      price: 121.44,
      date: "11/02/2017"
    },
    {
      yield: 5.34,
      spread: 0.33,
      price: 107.06,
      date: "14/02/2017"
    },
    {
      yield: 1.26,
      spread: 2.4,
      price: 104.09,
      date: "11/05/2017"
    },
    {
      yield: 13.24,
      spread: 6.4,
      price: 104.81,
      date: "16/08/2016"
    },
    {
      yield: 9.02,
      spread: 2.2,
      price: 118.7,
      date: "06/06/2017"
    },
    {
      yield: 13.87,
      spread: 8.66,
      price: 95.07,
      date: "04/09/2018"
    },
    {
      yield: 5.31,
      spread: 3.9,
      price: 90.08,
      date: "08/09/2017"
    },
    {
      yield: 3.52,
      spread: 1.51,
      price: 93.95,
      date: "25/06/2017"
    },
    {
      yield: 12.97,
      spread: 2.26,
      price: 124.2,
      date: "20/05/2016"
    },
    {
      yield: 10.12,
      spread: 1.82,
      price: 108.01,
      date: "02/11/2017"
    },
    {
      yield: 14.24,
      spread: 0.15,
      price: 110.1,
      date: "27/01/2019"
    },
    {
      yield: 1.48,
      spread: 9.84,
      price: 112.72,
      date: "20/03/2019"
    },
    {
      yield: 2.14,
      spread: 2.15,
      price: 117.05,
      date: "15/02/2019"
    },
    {
      yield: 14.64,
      spread: 5.86,
      price: 91.4,
      date: "31/07/2018"
    },
    {
      yield: 4.07,
      spread: 9.57,
      price: 97.48,
      date: "20/03/2019"
    },
    {
      yield: 10.27,
      spread: 8.56,
      price: 96.46,
      date: "29/01/2017"
    },
    {
      yield: 12.63,
      spread: 5.39,
      price: 96.32,
      date: "24/10/2017"
    },
    {
      yield: 3.32,
      spread: 0.64,
      price: 109.61,
      date: "11/03/2019"
    },
    {
      yield: 3.92,
      spread: 5.79,
      price: 91.29,
      date: "01/09/2017"
    },
    {
      yield: 1.77,
      spread: 3.87,
      price: 109.35,
      date: "03/10/2018"
    },
    {
      yield: 1.85,
      spread: 7.44,
      price: 107.76,
      date: "24/01/2019"
    },
    {
      yield: 4.7,
      spread: 8.62,
      price: 95.63,
      date: "21/08/2016"
    },
    {
      yield: 5.46,
      spread: 9,
      price: 86.95,
      date: "06/01/2019"
    },
    {
      yield: 4.78,
      spread: 9.32,
      price: 107.98,
      date: "25/09/2016"
    },
    {
      yield: 2.45,
      spread: 3.48,
      price: 101.14,
      date: "01/10/2016"
    },
    {
      yield: 2.39,
      spread: 8.7,
      price: 120.25,
      date: "13/09/2018"
    },
    {
      yield: 14.29,
      spread: 3.56,
      price: 113.45,
      date: "22/07/2018"
    },
    {
      yield: 9.71,
      spread: 5.3,
      price: 106.83,
      date: "10/12/2017"
    },
    {
      yield: 10.56,
      spread: 3.85,
      price: 124.91,
      date: "21/09/2017"
    },
    {
      yield: 7.66,
      spread: 6.84,
      price: 123.65,
      date: "13/01/2019"
    },
    {
      yield: 8.88,
      spread: 4.66,
      price: 123.68,
      date: "15/09/2016"
    },
    {
      yield: 7.15,
      spread: 2.08,
      price: 120.42,
      date: "03/10/2016"
    },
    {
      yield: 8.74,
      spread: 1.4,
      price: 96.97,
      date: "08/12/2018"
    },
    {
      yield: 1.03,
      spread: 1.79,
      price: 104.15,
      date: "10/01/2017"
    },
    {
      yield: 6.91,
      spread: 6.82,
      price: 85.53,
      date: "16/08/2016"
    },
    {
      yield: 1.64,
      spread: 5.08,
      price: 123.56,
      date: "09/12/2016"
    },
    {
      yield: 14.43,
      spread: 0.73,
      price: 99.78,
      date: "15/03/2018"
    },
    {
      yield: 8.8,
      spread: 0.43,
      price: 110.47,
      date: "18/07/2017"
    },
    {
      yield: 12.98,
      spread: 2.87,
      price: 92.88,
      date: "27/07/2017"
    },
    {
      yield: 8.89,
      spread: 5.15,
      price: 108.59,
      date: "04/07/2018"
    },
    {
      yield: 5.57,
      spread: 2.7,
      price: 90.67,
      date: "23/10/2018"
    },
    {
      yield: 12.79,
      spread: 3.98,
      price: 119.42,
      date: "20/03/2018"
    },
    {
      yield: 8.95,
      spread: 9.44,
      price: 94.7,
      date: "01/01/2018"
    },
    {
      yield: 8.63,
      spread: 0.79,
      price: 121.8,
      date: "03/07/2018"
    },
    {
      yield: 14.19,
      spread: 8.35,
      price: 103,
      date: "31/10/2017"
    },
    {
      yield: 7.81,
      spread: 2.66,
      price: 85.77,
      date: "22/01/2017"
    },
    {
      yield: 14.77,
      spread: 8.98,
      price: 92.6,
      date: "18/06/2017"
    },
    {
      yield: 12.01,
      spread: 8.83,
      price: 103.08,
      date: "02/12/2018"
    },
    {
      yield: 11.53,
      spread: 4.94,
      price: 112.21,
      date: "30/08/2016"
    },
    {
      yield: 5.44,
      spread: 1.79,
      price: 119.71,
      date: "23/05/2018"
    },
    {
      yield: 9.36,
      spread: 6.9,
      price: 103.92,
      date: "10/08/2018"
    },
    {
      yield: 3.78,
      spread: 9.67,
      price: 108.51,
      date: "30/01/2018"
    },
    {
      yield: 8.59,
      spread: 7.4,
      price: 100.87,
      date: "08/11/2016"
    },
    {
      yield: 1.63,
      spread: 1.56,
      price: 110.85,
      date: "11/11/2018"
    },
    {
      yield: 9.96,
      spread: 8.6,
      price: 100.57,
      date: "04/03/2018"
    },
    {
      yield: 12.01,
      spread: 8.86,
      price: 102.03,
      date: "02/04/2019"
    },
    {
      yield: 14.85,
      spread: 0.66,
      price: 116.07,
      date: "31/08/2016"
    },
    {
      yield: 5.82,
      spread: 8.38,
      price: 117.28,
      date: "16/08/2016"
    },
    {
      yield: 11.34,
      spread: 0.17,
      price: 85.92,
      date: "29/07/2018"
    },
    {
      yield: 12.61,
      spread: 3.96,
      price: 96.14,
      date: "13/03/2017"
    },
    {
      yield: 10.53,
      spread: 8.07,
      price: 103.05,
      date: "08/08/2016"
    },
    {
      yield: 11.59,
      spread: 4.32,
      price: 88.42,
      date: "06/06/2017"
    },
    {
      yield: 8.42,
      spread: 6.11,
      price: 93.95,
      date: "13/04/2016"
    },
    {
      yield: 2.31,
      spread: 1.39,
      price: 98.11,
      date: "08/01/2018"
    },
    {
      yield: 5.78,
      spread: 8.78,
      price: 86.29,
      date: "16/04/2016"
    },
    {
      yield: 11.78,
      spread: 0.22,
      price: 102.22,
      date: "16/01/2018"
    },
    {
      yield: 7.78,
      spread: 5.1,
      price: 86.53,
      date: "25/08/2016"
    },
    {
      yield: 6.18,
      spread: 2.97,
      price: 112.29,
      date: "20/03/2018"
    },
    {
      yield: 4.47,
      spread: 0.55,
      price: 90.74,
      date: "16/01/2018"
    },
    {
      yield: 9.13,
      spread: 7.74,
      price: 97.09,
      date: "17/05/2016"
    },
    {
      yield: 11.24,
      spread: 5.12,
      price: 92.63,
      date: "13/11/2017"
    },
    {
      yield: 13.71,
      spread: 9.61,
      price: 117.98,
      date: "22/04/2018"
    },
    {
      yield: 2,
      spread: 2.64,
      price: 92.86,
      date: "20/09/2016"
    },
    {
      yield: 9.15,
      spread: 7.12,
      price: 105.47,
      date: "28/11/2017"
    },
    {
      yield: 7.89,
      spread: 1.3,
      price: 108.47,
      date: "24/09/2018"
    },
    {
      yield: 8.18,
      spread: 3.18,
      price: 118.1,
      date: "17/06/2018"
    },
    {
      yield: 11.31,
      spread: 4.14,
      price: 104.43,
      date: "22/09/2016"
    },
    {
      yield: 4.08,
      spread: 5.74,
      price: 101.35,
      date: "26/11/2018"
    },
    {
      yield: 6.32,
      spread: 6.93,
      price: 116.79,
      date: "15/10/2017"
    },
    {
      yield: 9.02,
      spread: 4.65,
      price: 109.34,
      date: "02/04/2018"
    },
    {
      yield: 7.11,
      spread: 4.25,
      price: 90.85,
      date: "01/02/2018"
    },
    {
      yield: 3.13,
      spread: 6.45,
      price: 117.74,
      date: "10/04/2018"
    },
    {
      yield: 4.53,
      spread: 8.39,
      price: 96.6,
      date: "18/08/2018"
    },
    {
      yield: 2.37,
      spread: 5.88,
      price: 100.29,
      date: "14/11/2016"
    },
    {
      yield: 2,
      spread: 3.15,
      price: 123.47,
      date: "21/05/2016"
    },
    {
      yield: 4.79,
      spread: 6.97,
      price: 111.11,
      date: "20/07/2017"
    },
    {
      yield: 12.4,
      spread: 6.76,
      price: 107.62,
      date: "06/12/2016"
    },
    {
      yield: 7.09,
      spread: 8.04,
      price: 120.05,
      date: "24/01/2019"
    },
    {
      yield: 11.39,
      spread: 3.3,
      price: 124.37,
      date: "24/06/2018"
    },
    {
      yield: 7.15,
      spread: 4,
      price: 98.52,
      date: "08/08/2018"
    },
    {
      yield: 7.57,
      spread: 9.05,
      price: 92.91,
      date: "09/03/2019"
    },
    {
      yield: 2.07,
      spread: 7.56,
      price: 112.25,
      date: "22/04/2017"
    },
    {
      yield: 3.89,
      spread: 6.1,
      price: 99.18,
      date: "27/10/2016"
    },
    {
      yield: 7.3,
      spread: 6.92,
      price: 97.62,
      date: "31/01/2017"
    },
    {
      yield: 8.03,
      spread: 3.77,
      price: 116.35,
      date: "06/08/2016"
    },
    {
      yield: 7.49,
      spread: 4.08,
      price: 119.37,
      date: "22/06/2016"
    },
    {
      yield: 2.6,
      spread: 2.76,
      price: 94.02,
      date: "05/01/2017"
    },
    {
      yield: 2.07,
      spread: 1.34,
      price: 95.68,
      date: "08/03/2019"
    },
    {
      yield: 9.53,
      spread: 4.09,
      price: 109.66,
      date: "22/02/2019"
    },
    {
      yield: 3.64,
      spread: 8.87,
      price: 90.19,
      date: "23/02/2018"
    },
    {
      yield: 11.27,
      spread: 5.08,
      price: 104.34,
      date: "03/07/2016"
    },
    {
      yield: 10.93,
      spread: 9.6,
      price: 121.42,
      date: "09/08/2017"
    },
    {
      yield: 10.46,
      spread: 3.87,
      price: 92.13,
      date: "20/01/2018"
    },
    {
      yield: 3.26,
      spread: 3.03,
      price: 111.33,
      date: "11/05/2016"
    },
    {
      yield: 10.17,
      spread: 3.87,
      price: 99.12,
      date: "08/05/2016"
    },
    {
      yield: 9.99,
      spread: 8.58,
      price: 106.23,
      date: "06/04/2017"
    },
    {
      yield: 1.28,
      spread: 5.06,
      price: 94.48,
      date: "31/07/2016"
    },
    {
      yield: 2.61,
      spread: 6.79,
      price: 121.99,
      date: "06/12/2017"
    },
    {
      yield: 2.35,
      spread: 5.08,
      price: 111.2,
      date: "20/08/2016"
    },
    {
      yield: 14.98,
      spread: 3.54,
      price: 89.35,
      date: "07/06/2018"
    },
    {
      yield: 13.81,
      spread: 8.66,
      price: 95.89,
      date: "06/08/2018"
    },
    {
      yield: 9.3,
      spread: 0.31,
      price: 124.81,
      date: "25/12/2016"
    },
    {
      yield: 8.96,
      spread: 0.28,
      price: 91.03,
      date: "10/07/2017"
    },
    {
      yield: 5.99,
      spread: 9.19,
      price: 122.58,
      date: "10/06/2017"
    },
    {
      yield: 1.73,
      spread: 3.72,
      price: 122.42,
      date: "14/11/2016"
    },
    {
      yield: 13.98,
      spread: 6.55,
      price: 95.42,
      date: "27/06/2016"
    },
    {
      yield: 8.02,
      spread: 4.77,
      price: 111.14,
      date: "19/01/2018"
    },
    {
      yield: 8.61,
      spread: 3.25,
      price: 108.92,
      date: "07/12/2016"
    },
    {
      yield: 5.44,
      spread: 7.97,
      price: 94.5,
      date: "22/08/2017"
    },
    {
      yield: 13.26,
      spread: 3.15,
      price: 87.89,
      date: "30/08/2017"
    },
    {
      yield: 6.54,
      spread: 7.94,
      price: 114.87,
      date: "13/04/2018"
    },
    {
      yield: 12.37,
      spread: 3.05,
      price: 85.59,
      date: "16/05/2018"
    }
  ]
};

export { bondDataMock };
