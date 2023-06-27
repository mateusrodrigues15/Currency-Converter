const currency_convert_from = document.querySelector('#convert-for')
const currency_converted = document.querySelector('#convert-value')
const input_number_convert = document.querySelector('#input-number-convert')

let countrys_test = ['brasil', 'estados unidos', 'europa', 'reino unido', 'japao', 'australia', 'suica', 'canada', 'china',
    'argentina', 'turquia', 'russia', 'kuwait', 'oma', 'bitcoin']

const converted_from_brasil = [4.80, 5.26, 6.12, 0.033, 3.21, 5.37, 3.64, 0.66, 0.019, 0.18, 0.056, 15.62, 12.46, 147321.91]

const converted_from_eua = [0.21, 1.10, 1.27, 0.0069, 0.67, 1.12, 0.76, 0.14, 0.0039, 0.038, 0.012, 3.26, 2.60, 30700.70]

const converted_from_europe = [0.19, 0.91, 1.16, 0.0063, 0.61, 1.02, 0.69, 0.13, 0.0036, 0.035, 0.011, 2.97, 2.37, 28018.95]

const converted_from_sterling = [0.16, 0.78, 0.86, 0.0054, 0.52, 0.88, 0.60, 0.11, 0.0031, 0.030, 0.0092, 2.55, 2.04, 24055.43]

const converted_from_yen = [30.00, 143.97, 157.81, 183.51, 96.32, 161.23, 109.26, 19.94, 0.56, 5.53, 1.68, 468.68, 374.02, 4415380.01]

const converted_from_australian = [0.31, 1.50, 1.64, 1.91, 0.010, 1.67, 1.13, 0.21, 0.0059, 0.057, 0.017, 4.87, 3.88, 45880.93]

const converted_from_franc = [0.19, 0.89, 0.98, 1.14, 0.0062, 0.60, 0.68, 0.12, 0.0035, 0.034, 0.010, 2.91, 2.32, 27409.95]

const converted_from_canadian = [0.27, 1.32, 1.44, 1.68, 0.0092, 0.88, 1.48, 0.18, 0.0052, 0.051, 0.015, 4.29, 3.42, 40491.35]

const converted_from_yuan = [1.50, 7.22, 7.91, 9.20, 0.050, 4.83, 8.08, 5.48, 0.028, 0.28, 0.084, 23.51, 18.75, 221811.76]

const converted_from_peso = [53.16, 255.22, 279.74, 325.31, 1.77, 170.69, 285.80, 193.65, 35.35, 9.81, 2.99, 830.88, 662.92, 7833201.26]

const converted_from_lira = [5.42, 26.03, 28.53, 33.18, 0.18, 17.41, 29.14, 19.75, 3.60, 0.10, 0.30, 84.74, 67.60, 799438.53]

const converted_from_ruble = [17.81, 85.48, 93.69, 108.97, 0.59, 57.18, 95.71, 64.87, 11.84, 0.33, 3.28, 278.20, 222.01, 2622603.78]

const converted_from_kuwait = [0.064, 0.31, 0.34, 0.39, 0.0021, 0.21, 0.34, 0.23, 0.043, 0.0012, 0.012, 0.0036, 0.80, 9426.95]

const converted_from_rial = [0.080, 0.39, 0.42, 0.49, 0.0027, 0.26, 0.43, 0.29, 0.053, 0.0015, 0.015, 0.0045, 1.25, 11808.69]

const converted_from_bitcoin = [0.0000068, 0.000033, 0.000036, 0.000042, 2.3e-7, 0.000022, 0.000037, 0.000025, 0.0000045, 1.3e-7, 0.0000013,
    3.8e-7, 0.00011, 0.000085]

const convert_values = () => {

    const coin_img_one = document.querySelector('.coin-one')
    const value_one = document.querySelector('.value-one')
    const coin_img_two = document.querySelector('.coin-two')
    const value_two = document.querySelector('.value-two')

    if (currency_convert_from.value === 'real') {
        value_one.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            maximumFractionDigits: 2
        }).format(input_number_convert.value))}</strong>`
        coin_img_one.src = './assets(coins)/brazilian-real.png'

        if (currency_converted.value === 'real') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                maximumFractionDigits: 2
            }).format(input_number_convert.value))}</strong>`
            coin_img_two.src = './assets(coins)/brazilian-real.png'
        }

        if (currency_converted.value === 'dolar') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_brasil[0]))}</strong>`
            coin_img_two.src = './assets(coins)/dollar.png'
        }

        if (currency_converted.value === 'euro') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_brasil[1]))}</strong>`
            coin_img_two.src = './assets(coins)/euro.png'
        }

        if (currency_converted.value === 'libra') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_brasil[2]))}</strong>`
            coin_img_two.src = './assets(coins)/pound-sterling.png'
        }

        if (currency_converted.value === 'iene') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("ja-JP", {
                style: "currency",
                currency: "JPY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_brasil[3]))}</strong>`
            coin_img_two.src = './assets(coins)/yen.png'
        }

        if (currency_converted.value === 'australiano') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-AU", {
                style: "currency",
                currency: "AUD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_brasil[4]))}</strong>`
            coin_img_two.src = './assets(coins)/australian-dollar.png'
        }

        if (currency_converted.value === 'franco') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("de-CH", {
                style: "currency",
                currency: "CHF",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_brasil[5]))}</strong>`
            coin_img_two.src = './assets(coins)/swiss-franc.png'
        }

        if (currency_converted.value === 'canadense') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-CA", {
                style: "currency",
                currency: "CAD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_brasil[6]))}</strong>`
            coin_img_two.src = './assets(coins)/canadian-dollar.png'
        }

        if (currency_converted.value === 'yuan') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("zh-CN", {
                style: "currency",
                currency: "CNY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_brasil[7]))}</strong>`
            coin_img_two.src = './assets(coins)/yuan.png'
        }

        if (currency_converted.value === 'peso') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_brasil[8]))}</strong>`
            coin_img_two.src = './assets(coins)/peso.png'
        }

        if (currency_converted.value === 'lira') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("tr-TR", {
                style: "currency",
                currency: "TRY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_brasil[9]))}</strong>`
            coin_img_two.src = './assets(coins)/turkish-lira.png'
        }

        if (currency_converted.value === 'rublo') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("ru-RU", {
                style: "currency",
                currency: "RUB",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_brasil[10]))}</strong>`
            coin_img_two.src = './assets(coins)/ruble.png'
        }

        if (currency_converted.value === 'dinar') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "KWD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_brasil[11]))}</strong>`
            coin_img_two.src = './assets(coins)/kuwait.png'
        }

        if (currency_converted.value === 'rial') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "OMR",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_brasil[12]))}</strong>`
            coin_img_two.src = './assets(coins)/rial.png'
        }

        if (currency_converted.value === 'bitcoin') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "XBT",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_brasil[13]))}</strong>`
            coin_img_two.src = './assets(coins)/bitcoin.png'
        }






    }

    if (currency_convert_from.value === 'dolar') {
        value_one.innerHTML = `<strong>${(new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 2
        }).format(input_number_convert.value))}</strong>`
        coin_img_one.src = './assets(coins)/dollar.png'

        if (currency_converted.value === 'dolar') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value))}</strong>`
            coin_img_two.src = './assets(coins)/dollar.png'
        }

        if (currency_converted.value === 'real') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_eua[0]))}</strong>`
            coin_img_two.src = './assets(coins)/brazilian-real.png'
        }

        if (currency_converted.value === 'euro') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_eua[1]))}</strong>`
            coin_img_two.src = './assets(coins)/euro.png'
        }

        if (currency_converted.value === 'libra') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_eua[2]))}</strong>`
            coin_img_two.src = './assets(coins)/pound-sterling.png'
        }

        if (currency_converted.value === 'iene') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("ja-JP", {
                style: "currency",
                currency: "JPY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_eua[3]))}</strong>`
            coin_img_two.src = './assets(coins)/yen.png'
        }

        if (currency_converted.value === 'australiano') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-AU", {
                style: "currency",
                currency: "AUD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_eua[4]))}</strong>`
            coin_img_two.src = './assets(coins)/australian-dollar.png'
        }

        if (currency_converted.value === 'franco') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("de-CH", {
                style: "currency",
                currency: "CHF",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_eua[5]))}</strong>`
            coin_img_two.src = './assets(coins)/swiss-franc.png'
        }

        if (currency_converted.value === 'canadense') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-CA", {
                style: "currency",
                currency: "CAD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_eua[6]))}</strong>`
            coin_img_two.src = './assets(coins)/canadian-dollar.png'
        }

        if (currency_converted.value === 'yuan') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("zh-CN", {
                style: "currency",
                currency: "CNY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_eua[7]))}</strong>`
            coin_img_two.src = './assets(coins)/yuan.png'
        }

        if (currency_converted.value === 'peso') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_eua[8]))}</strong>`
            coin_img_two.src = './assets(coins)/peso.png'
        }

        if (currency_converted.value === 'lira') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("tr-TR", {
                style: "currency",
                currency: "TRY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_eua[9]))}</strong>`
            coin_img_two.src = './assets(coins)/turkish-lira.png'
        }

        if (currency_converted.value === 'rublo') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("ru-RU", {
                style: "currency",
                currency: "RUB",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_eua[10]))}</strong>`
            coin_img_two.src = './assets(coins)/ruble.png'
        }

        if (currency_converted.value === 'dinar') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "KWD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_eua[11]))}</strong>`
            coin_img_two.src = './assets(coins)/kuwait.png'
        }

        if (currency_converted.value === 'rial') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "OMR",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_eua[12]))}</strong>`
            coin_img_two.src = './assets(coins)/rial.png'
        }

        if (currency_converted.value === 'bitcoin') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "XBT",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_eua[13]))}</strong>`
            coin_img_two.src = './assets(coins)/bitcoin.png'
        }









    }

    if (currency_convert_from.value === 'euro') {
        value_one.innerHTML = `<strong>${(new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(input_number_convert.value))}</strong>`
        coin_img_one.src = './assets(coins)/euro.png'

        if (currency_converted.value === 'euro') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
                maximumFractionDigits: 2
            }).format(input_number_convert.value))}</strong>`
            coin_img_two.src = './assets(coins)/euro.png'
        }

        if (currency_converted.value === 'real') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_europe[0]))}</strong>`
            coin_img_two.src = './assets(coins)/brazilian-real.png'
        }

        if (currency_converted.value === 'dolar') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_europe[1]))}</strong>`
            coin_img_two.src = './assets(coins)/dollar.png'
        }

        if (currency_converted.value === 'libra') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_europe[2]))}</strong>`
            coin_img_two.src = './assets(coins)/pound-sterling.png'
        }

        if (currency_converted.value === 'iene') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("ja-JP", {
                style: "currency",
                currency: "JPY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_europe[3]))}</strong>`
            coin_img_two.src = './assets(coins)/yen.png'
        }

        if (currency_converted.value === 'australiano') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-AU", {
                style: "currency",
                currency: "AUD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_europe[4]))}</strong>`
            coin_img_two.src = './assets(coins)/australian-dollar.png'
        }

        if (currency_converted.value === 'franco') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("de-CH", {
                style: "currency",
                currency: "CHF",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_europe[5]))}</strong>`
            coin_img_two.src = './assets(coins)/swiss-franc.png'
        }

        if (currency_converted.value === 'canadense') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-CA", {
                style: "currency",
                currency: "CAD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_europe[6]))}</strong>`
            coin_img_two.src = './assets(coins)/canadian-dollar.png'
        }

        if (currency_converted.value === 'yuan') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("zh-CN", {
                style: "currency",
                currency: "CNY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_europe[7]))}</strong>`
            coin_img_two.src = './assets(coins)/yuan.png'
        }

        if (currency_converted.value === 'peso') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_europe[8]))}</strong>`
            coin_img_two.src = './assets(coins)/peso.png'
        }

        if (currency_converted.value === 'lira') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("tr-TR", {
                style: "currency",
                currency: "TRY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_europe[9]))}</strong>`
            coin_img_two.src = './assets(coins)/turkish-lira.png'
        }

        if (currency_converted.value === 'rublo') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("ru-RU", {
                style: "currency",
                currency: "RUB",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_europe[10]))}</strong>`
            coin_img_two.src = './assets(coins)/ruble.png'
        }

        if (currency_converted.value === 'dinar') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "KWD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_europe[11]))}</strong>`
            coin_img_two.src = './assets(coins)/kuwait.png'
        }

        if (currency_converted.value === 'rial') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "OMR",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_europe[12]))}</strong>`
            coin_img_two.src = './assets(coins)/rial.png'
        }

        if (currency_converted.value === 'bitcoin') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "XBT",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_europe[13]))}</strong>`
            coin_img_two.src = './assets(coins)/bitcoin.png'
        }
    }

    if (currency_convert_from.value === 'libra') {
        value_one.innerHTML = `<strong>${(new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
            maximumFractionDigits: 2
        }).format(input_number_convert.value))}</strong>`
        coin_img_one.src = './assets(coins)/pound-sterling.png'

        if (currency_converted.value === 'libra') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP",
                maximumFractionDigits: 2
            }).format(input_number_convert.value))}</strong>`
            coin_img_two.src = './assets(coins)/pound-sterling.png'
        }

        if (currency_converted.value === 'real') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_sterling[0]))}</strong>`
            coin_img_two.src = './assets(coins)/brazilian-real.png'
        }

        if (currency_converted.value === 'dolar') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_sterling[1]))}</strong>`
            coin_img_two.src = './assets(coins)/dollar.png'
        }

        if (currency_converted.value === 'euro') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_sterling[2]))}</strong>`
            coin_img_two.src = './assets(coins)/euro.png'
        }

        if (currency_converted.value === 'iene') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("ja-JP", {
                style: "currency",
                currency: "JPY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_sterling[3]))}</strong>`
            coin_img_two.src = './assets(coins)/yen.png'
        }

        if (currency_converted.value === 'australiano') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-AU", {
                style: "currency",
                currency: "AUD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_sterling[4]))}</strong>`
            coin_img_two.src = './assets(coins)/australian-dollar.png'
        }

        if (currency_converted.value === 'franco') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("de-CH", {
                style: "currency",
                currency: "CHF",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_sterling[5]))}</strong>`
            coin_img_two.src = './assets(coins)/swiss-franc.png'
        }

        if (currency_converted.value === 'canadense') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-CA", {
                style: "currency",
                currency: "CAD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_sterling[6]))}</strong>`
            coin_img_two.src = './assets(coins)/canadian-dollar.png'
        }

        if (currency_converted.value === 'yuan') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("zh-CN", {
                style: "currency",
                currency: "CNY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_sterling[7]))}</strong>`
            coin_img_two.src = './assets(coins)/yuan.png'
        }

        if (currency_converted.value === 'peso') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_sterling[8]))}</strong>`
            coin_img_two.src = './assets(coins)/peso.png'
        }

        if (currency_converted.value === 'lira') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("tr-TR", {
                style: "currency",
                currency: "TRY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_sterling[9]))}</strong>`
            coin_img_two.src = './assets(coins)/turkish-lira.png'
        }

        if (currency_converted.value === 'rublo') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("ru-RU", {
                style: "currency",
                currency: "RUB",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_sterling[10]))}</strong>`
            coin_img_two.src = './assets(coins)/ruble.png'
        }

        if (currency_converted.value === 'dinar') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "KWD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_sterling[11]))}</strong>`
            coin_img_two.src = './assets(coins)/kuwait.png'
        }

        if (currency_converted.value === 'rial') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "OMR",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_sterling[12]))}</strong>`
            coin_img_two.src = './assets(coins)/rial.png'
        }

        if (currency_converted.value === 'bitcoin') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "XBT",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_sterling[13]))}</strong>`
            coin_img_two.src = './assets(coins)/bitcoin.png'
        }
    }

    if (currency_convert_from.value === 'iene') {
        value_one.innerHTML = `<strong>${(new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY",
            maximumFractionDigits: 2
        }).format(input_number_convert.value))}</strong>`
        coin_img_one.src = './assets(coins)/yen.png'

        if (currency_converted.value === 'iene') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("ja-JP", {
                style: "currency",
                currency: "JPY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value))}</strong>`
            coin_img_two.src = './assets(coins)/yen.png'
        }

        if (currency_converted.value === 'real') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_yen[0]))}</strong>`
            coin_img_two.src = './assets(coins)/brazilian-real.png'
        }

        if (currency_converted.value === 'dolar') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_yen[1]))}</strong>`
            coin_img_two.src = './assets(coins)/dollar.png'
        }

        if (currency_converted.value === 'euro') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_yen[2]))}</strong>`
            coin_img_two.src = './assets(coins)/euro.png'
        }

        if (currency_converted.value === 'libra') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_yen[3]))}</strong>`
            coin_img_two.src = './assets(coins)/pound-sterling.png'
        }

        if (currency_converted.value === 'australiano') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-AU", {
                style: "currency",
                currency: "AUD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_yen[4]))}</strong>`
            coin_img_two.src = './assets(coins)/australian-dollar.png'
        }

        if (currency_converted.value === 'franco') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("de-CH", {
                style: "currency",
                currency: "CHF",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_yen[5]))}</strong>`
            coin_img_two.src = './assets(coins)/swiss-franc.png'
        }

        if (currency_converted.value === 'canadense') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-CA", {
                style: "currency",
                currency: "CAD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_yen[6]))}</strong>`
            coin_img_two.src = './assets(coins)/canadian-dollar.png'
        }

        if (currency_converted.value === 'yuan') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("zh-CN", {
                style: "currency",
                currency: "CNY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_yen[7]))}</strong>`
            coin_img_two.src = './assets(coins)/yuan.png'
        }

        if (currency_converted.value === 'peso') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_yen[8]))}</strong>`
            coin_img_two.src = './assets(coins)/peso.png'
        }

        if (currency_converted.value === 'lira') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("tr-TR", {
                style: "currency",
                currency: "TRY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_yen[9]))}</strong>`
            coin_img_two.src = './assets(coins)/turkish-lira.png'
        }

        if (currency_converted.value === 'rublo') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("ru-RU", {
                style: "currency",
                currency: "RUB",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_yen[10]))}</strong>`
            coin_img_two.src = './assets(coins)/ruble.png'
        }

        if (currency_converted.value === 'dinar') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "KWD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_yen[11]))}</strong>`
            coin_img_two.src = './assets(coins)/kuwait.png'
        }

        if (currency_converted.value === 'rial') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "OMR",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_yen[12]))}</strong>`
            coin_img_two.src = './assets(coins)/rial.png'
        }

        if (currency_converted.value === 'bitcoin') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "XBT",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_yen[13]))}</strong>`
            coin_img_two.src = './assets(coins)/bitcoin.png'
        }
    }

    if (currency_convert_from.value === 'australiano') {
        value_one.innerHTML = `<strong>${(new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD",
            maximumFractionDigits: 2
        }).format(input_number_convert.value))}</strong>`
        coin_img_one.src = './assets(coins)/australian-dollar.png'

        if (currency_converted.value === 'australiano') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-AU", {
                style: "currency",
                currency: "AUD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value))}</strong>`
            coin_img_two.src = './assets(coins)/australian-dollar.png'
        }

        if (currency_converted.value === 'real') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_australian[0]))}</strong>`
            coin_img_two.src = './assets(coins)/brazilian-real.png'
        }

        if (currency_converted.value === 'dolar') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_australian[1]))}</strong>`
            coin_img_two.src = './assets(coins)/dollar.png'
        }

        if (currency_converted.value === 'euro') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_australian[2]))}</strong>`
            coin_img_two.src = './assets(coins)/euro.png'
        }

        if (currency_converted.value === 'libra') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_australian[3]))}</strong>`
            coin_img_two.src = './assets(coins)/pound-sterling.png'
        }

        if (currency_converted.value === 'iene') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("ja-JP", {
                style: "currency",
                currency: "JPY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_australian[4]))}</strong>`
            coin_img_two.src = './assets(coins)/yen.png'
        }

        if (currency_converted.value === 'franco') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("de-CH", {
                style: "currency",
                currency: "CHF",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_australian[5]))}</strong>`
            coin_img_two.src = './assets(coins)/swiss-franc.png'
        }

        if (currency_converted.value === 'canadense') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-CA", {
                style: "currency",
                currency: "CAD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_australian[6]))}</strong>`
            coin_img_two.src = './assets(coins)/canadian-dollar.png'
        }

        if (currency_converted.value === 'yuan') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("zh-CN", {
                style: "currency",
                currency: "CNY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_australian[7]))}</strong>`
            coin_img_two.src = './assets(coins)/yuan.png'
        }

        if (currency_converted.value === 'peso') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_australian[8]))}</strong>`
            coin_img_two.src = './assets(coins)/peso.png'
        }

        if (currency_converted.value === 'lira') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("tr-TR", {
                style: "currency",
                currency: "TRY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_australian[9]))}</strong>`
            coin_img_two.src = './assets(coins)/turkish-lira.png'
        }

        if (currency_converted.value === 'rublo') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("ru-RU", {
                style: "currency",
                currency: "RUB",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_australian[10]))}</strong>`
            coin_img_two.src = './assets(coins)/ruble.png'
        }

        if (currency_converted.value === 'dinar') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "KWD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_australian[11]))}</strong>`
            coin_img_two.src = './assets(coins)/kuwait.png'
        }

        if (currency_converted.value === 'rial') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "OMR",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_australian[12]))}</strong>`
            coin_img_two.src = './assets(coins)/rial.png'
        }

        if (currency_converted.value === 'bitcoin') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "XBT",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_australian[13]))}</strong>`
            coin_img_two.src = './assets(coins)/bitcoin.png'
        }
    }

    if (currency_convert_from.value === 'franco') {
        value_one.innerHTML = `<strong>${(new Intl.NumberFormat("de-CH", {
            style: "currency",
            currency: "CHF",
            maximumFractionDigits: 2
        }).format(input_number_convert.value))}</strong>`
        coin_img_one.src = './assets(coins)/swiss-franc.png'

        if (currency_converted.value === 'franco') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("de-CH", {
                style: "currency",
                currency: "CHF",
                maximumFractionDigits: 2
            }).format(input_number_convert.value))}</strong>`
            coin_img_two.src = './assets(coins)/swiss-franc.png'
        }

        if (currency_converted.value === 'real') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_franc[0]))}</strong>`
            coin_img_two.src = './assets(coins)/brazilian-real.png'
        }

        if (currency_converted.value === 'dolar') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_franc[1]))}</strong>`
            coin_img_two.src = './assets(coins)/dollar.png'
        }

        if (currency_converted.value === 'euro') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_franc[2]))}</strong>`
            coin_img_two.src = './assets(coins)/euro.png'
        }

        if (currency_converted.value === 'libra') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_franc[3]))}</strong>`
            coin_img_two.src = './assets(coins)/pound-sterling.png'
        }

        if (currency_converted.value === 'iene') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("ja-JP", {
                style: "currency",
                currency: "JPY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_franc[4]))}</strong>`
            coin_img_two.src = './assets(coins)/yen.png'
        }

        if (currency_converted.value === 'australiano') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-AU", {
                style: "currency",
                currency: "AUD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_franc[5]))}</strong>`
            coin_img_two.src = './assets(coins)/australian-dollar.png'
        }

        if (currency_converted.value === 'canadense') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-CA", {
                style: "currency",
                currency: "CAD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_franc[6]))}</strong>`
            coin_img_two.src = './assets(coins)/canadian-dollar.png'
        }

        if (currency_converted.value === 'yuan') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("zh-CN", {
                style: "currency",
                currency: "CNY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_franc[7]))}</strong>`
            coin_img_two.src = './assets(coins)/yuan.png'
        }

        if (currency_converted.value === 'peso') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_franc[8]))}</strong>`
            coin_img_two.src = './assets(coins)/peso.png'
        }

        if (currency_converted.value === 'lira') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("tr-TR", {
                style: "currency",
                currency: "TRY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_franc[9]))}</strong>`
            coin_img_two.src = './assets(coins)/turkish-lira.png'
        }

        if (currency_converted.value === 'rublo') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("ru-RU", {
                style: "currency",
                currency: "RUB",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_franc[10]))}</strong>`
            coin_img_two.src = './assets(coins)/ruble.png'
        }

        if (currency_converted.value === 'dinar') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "KWD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_franc[11]))}</strong>`
            coin_img_two.src = './assets(coins)/kuwait.png'
        }

        if (currency_converted.value === 'rial') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "OMR",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_franc[12]))}</strong>`
            coin_img_two.src = './assets(coins)/rial.png'
        }

        if (currency_converted.value === 'bitcoin') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "XBT",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_franc[13]))}</strong>`
            coin_img_two.src = './assets(coins)/bitcoin.png'
        }



    }

    if (currency_convert_from.value === 'canadense') {
        value_one.innerHTML = `<strong>${(new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD",
            maximumFractionDigits: 2
        }).format(input_number_convert.value))}</strong>`
        coin_img_one.src = './assets(coins)/canadian-dollar.png'

        if (currency_converted.value === 'canadense') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-CA", {
                style: "currency",
                currency: "CAD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value))}</strong>`
            coin_img_two.src = './assets(coins)/canadian-dollar.png'
        }

        if (currency_converted.value === 'real') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_canadian[0]))}</strong>`
            coin_img_two.src = './assets(coins)/brazilian-real.png'
        }

        if (currency_converted.value === 'dolar') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_canadian[1]))}</strong>`
            coin_img_two.src = './assets(coins)/dollar.png'
        }

        if (currency_converted.value === 'euro') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_canadian[2]))}</strong>`
            coin_img_two.src = './assets(coins)/euro.png'
        }

        if (currency_converted.value === 'libra') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_canadian[3]))}</strong>`
            coin_img_two.src = './assets(coins)/pound-sterling.png'
        }

        if (currency_converted.value === 'iene') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("ja-JP", {
                style: "currency",
                currency: "JPY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_canadian[4]))}</strong>`
            coin_img_two.src = './assets(coins)/yen.png'
        }

        if (currency_converted.value === 'australiano') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-AU", {
                style: "currency",
                currency: "AUD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_canadian[5]))}</strong>`
            coin_img_two.src = './assets(coins)/australian-dollar.png'
        }

        if (currency_converted.value === 'franco') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("de-CH", {
                style: "currency",
                currency: "CHF",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_canadian[6]))}</strong>`
            coin_img_two.src = './assets(coins)/swiss-franc.png'
        }

        if (currency_converted.value === 'yuan') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("zh-CN", {
                style: "currency",
                currency: "CNY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_canadian[7]))}</strong>`
            coin_img_two.src = './assets(coins)/yuan.png'
        }

        if (currency_converted.value === 'peso') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_canadian[8]))}</strong>`
            coin_img_two.src = './assets(coins)/peso.png'
        }

        if (currency_converted.value === 'lira') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("tr-TR", {
                style: "currency",
                currency: "TRY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_canadian[9]))}</strong>`
            coin_img_two.src = './assets(coins)/turkish-lira.png'
        }

        if (currency_converted.value === 'rublo') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("ru-RU", {
                style: "currency",
                currency: "RUB",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_canadian[10]))}</strong>`
            coin_img_two.src = './assets(coins)/ruble.png'
        }

        if (currency_converted.value === 'dinar') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "KWD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_canadian[11]))}</strong>`
            coin_img_two.src = './assets(coins)/kuwait.png'
        }

        if (currency_converted.value === 'rial') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "OMR",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_canadian[12]))}</strong>`
            coin_img_two.src = './assets(coins)/rial.png'
        }

        if (currency_converted.value === 'bitcoin') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "XBT",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_canadian[13]))}</strong>`
            coin_img_two.src = './assets(coins)/bitcoin.png'
        }
    }

    if (currency_convert_from.value === 'yuan') {
        value_one.innerHTML = `<strong>${(new Intl.NumberFormat("zh-CN", {
            style: "currency",
            currency: "CNY",
            maximumFractionDigits: 2
        }).format(input_number_convert.value))}</strong>`
        coin_img_one.src = './assets(coins)/yuan.png'

        if (currency_converted.value === 'yuan') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("zh-CN", {
                style: "currency",
                currency: "CNY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value))}</strong>`
            coin_img_two.src = './assets(coins)/yuan.png'
        }

        if (currency_converted.value === 'real') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_yuan[0]))}</strong>`
            coin_img_two.src = './assets(coins)/brazilian-real.png'
        }

        if (currency_converted.value === 'dolar') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_yuan[1]))}</strong>`
            coin_img_two.src = './assets(coins)/dollar.png'
        }

        if (currency_converted.value === 'euro') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_yuan[2]))}</strong>`
            coin_img_two.src = './assets(coins)/euro.png'
        }

        if (currency_converted.value === 'libra') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_yuan[3]))}</strong>`
            coin_img_two.src = './assets(coins)/pound-sterling.png'
        }

        if (currency_converted.value === 'iene') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("ja-JP", {
                style: "currency",
                currency: "JPY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_yuan[4]))}</strong>`
            coin_img_two.src = './assets(coins)/yen.png'
        }

        if (currency_converted.value === 'australiano') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-AU", {
                style: "currency",
                currency: "AUD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_yuan[5]))}</strong>`
            coin_img_two.src = './assets(coins)/australian-dollar.png'
        }

        if (currency_converted.value === 'franco') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("de-CH", {
                style: "currency",
                currency: "CHF",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_yuan[6]))}</strong>`
            coin_img_two.src = './assets(coins)/swiss-franc.png'
        }

        if (currency_converted.value === 'canadense') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-CA", {
                style: "currency",
                currency: "CAD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_yuan[7]))}</strong>`
            coin_img_two.src = './assets(coins)/canadian-dollar.png'
        }

        if (currency_converted.value === 'peso') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_yuan[8]))}</strong>`
            coin_img_two.src = './assets(coins)/peso.png'
        }

        if (currency_converted.value === 'lira') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("tr-TR", {
                style: "currency",
                currency: "TRY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_yuan[9]))}</strong>`
            coin_img_two.src = './assets(coins)/turkish-lira.png'
        }

        if (currency_converted.value === 'rublo') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("ru-RU", {
                style: "currency",
                currency: "RUB",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_yuan[10]))}</strong>`
            coin_img_two.src = './assets(coins)/ruble.png'
        }

        if (currency_converted.value === 'dinar') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "KWD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_yuan[11]))}</strong>`
            coin_img_two.src = './assets(coins)/kuwait.png'
        }

        if (currency_converted.value === 'rial') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "OMR",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_yuan[12]))}</strong>`
            coin_img_two.src = './assets(coins)/rial.png'
        }

        if (currency_converted.value === 'bitcoin') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "XBT",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_yuan[13]))}</strong>`
            coin_img_two.src = './assets(coins)/bitcoin.png'
        }
    }

    if (currency_convert_from.value === 'peso') {
        value_one.innerHTML = `<strong>${(new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS",
            maximumFractionDigits: 2
        }).format(input_number_convert.value))}</strong>`
        coin_img_one.src = './assets(coins)/peso.png'

        if (currency_converted.value === 'peso') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
                maximumFractionDigits: 2
            }).format(input_number_convert.value))}</strong>`
            coin_img_two.src = './assets(coins)/peso.png'
        }

        if (currency_converted.value === 'real') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_peso[0]))}</strong>`
            coin_img_two.src = './assets(coins)/brazilian-real.png'
        }

        if (currency_converted.value === 'dolar') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_peso[1]))}</strong>`
            coin_img_two.src = './assets(coins)/dollar.png'
        }

        if (currency_converted.value === 'euro') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_peso[2]))}</strong>`
            coin_img_two.src = './assets(coins)/euro.png'
        }

        if (currency_converted.value === 'libra') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_peso[3]))}</strong>`
            coin_img_two.src = './assets(coins)/pound-sterling.png'
        }

        if (currency_converted.value === 'iene') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("ja-JP", {
                style: "currency",
                currency: "JPY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_peso[4]))}</strong>`
            coin_img_two.src = './assets(coins)/yen.png'
        }

        if (currency_converted.value === 'australiano') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-AU", {
                style: "currency",
                currency: "AUD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_peso[5]))}</strong>`
            coin_img_two.src = './assets(coins)/australian-dollar.png'
        }

        if (currency_converted.value === 'franco') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("de-CH", {
                style: "currency",
                currency: "CHF",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_peso[6]))}</strong>`
            coin_img_two.src = './assets(coins)/swiss-franc.png'
        }

        if (currency_converted.value === 'canadense') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-CA", {
                style: "currency",
                currency: "CAD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_peso[7]))}</strong>`
            coin_img_two.src = './assets(coins)/canadian-dollar.png'
        }

        if (currency_converted.value === 'yuan') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("zh-CN", {
                style: "currency",
                currency: "CNY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_peso[8]))}</strong>`
            coin_img_two.src = './assets(coins)/yuan.png'
        }

        if (currency_converted.value === 'lira') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("tr-TR", {
                style: "currency",
                currency: "TRY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_peso[9]))}</strong>`
            coin_img_two.src = './assets(coins)/turkish-lira.png'
        }

        if (currency_converted.value === 'rublo') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("ru-RU", {
                style: "currency",
                currency: "RUB",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_peso[10]))}</strong>`
            coin_img_two.src = './assets(coins)/ruble.png'
        }

        if (currency_converted.value === 'dinar') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "KWD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_peso[11]))}</strong>`
            coin_img_two.src = './assets(coins)/kuwait.png'
        }

        if (currency_converted.value === 'rial') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "OMR",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_peso[12]))}</strong>`
            coin_img_two.src = './assets(coins)/rial.png'
        }

        if (currency_converted.value === 'bitcoin') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "XBT",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_peso[13]))}</strong>`
            coin_img_two.src = './assets(coins)/bitcoin.png'
        }
    }

    if (currency_convert_from.value === 'lira') {
        value_one.innerHTML = `<strong>${(new Intl.NumberFormat("tr-TR", {
            style: "currency",
            currency: "TRY",
            maximumFractionDigits: 2
        }).format(input_number_convert.value))}</strong>`
        coin_img_one.src = './assets(coins)/turkish-lira.png'

        if (currency_converted.value === 'lira') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("tr-TR", {
                style: "currency",
                currency: "TRY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value))}</strong>`
            coin_img_two.src = './assets(coins)/turkish-lira.png'
        }

        if (currency_converted.value === 'real') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_lira[0]))}</strong>`
            coin_img_two.src = './assets(coins)/brazilian-real.png'
        }

        if (currency_converted.value === 'dolar') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_lira[1]))}</strong>`
            coin_img_two.src = './assets(coins)/dollar.png'
        }

        if (currency_converted.value === 'euro') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_lira[2]))}</strong>`
            coin_img_two.src = './assets(coins)/euro.png'
        }

        if (currency_converted.value === 'libra') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_lira[3]))}</strong>`
            coin_img_two.src = './assets(coins)/pound-sterling.png'
        }

        if (currency_converted.value === 'iene') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("ja-JP", {
                style: "currency",
                currency: "JPY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_lira[4]))}</strong>`
            coin_img_two.src = './assets(coins)/yen.png'
        }

        if (currency_converted.value === 'australiano') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-AU", {
                style: "currency",
                currency: "AUD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_lira[5]))}</strong>`
            coin_img_two.src = './assets(coins)/australian-dollar.png'
        }

        if (currency_converted.value === 'franco') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("de-CH", {
                style: "currency",
                currency: "CHF",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_lira[6]))}</strong>`
            coin_img_two.src = './assets(coins)/swiss-franc.png'
        }

        if (currency_converted.value === 'canadense') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-CA", {
                style: "currency",
                currency: "CAD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_lira[7]))}</strong>`
            coin_img_two.src = './assets(coins)/canadian-dollar.png'
        }

        if (currency_converted.value === 'yuan') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("zh-CN", {
                style: "currency",
                currency: "CNY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_lira[8]))}</strong>`
            coin_img_two.src = './assets(coins)/yuan.png'
        }

        if (currency_converted.value === 'peso') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_lira[9]))}</strong>`
            coin_img_two.src = './assets(coins)/peso.png'
        }

        if (currency_converted.value === 'rublo') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("ru-RU", {
                style: "currency",
                currency: "RUB",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_lira[10]))}</strong>`
            coin_img_two.src = './assets(coins)/ruble.png'
        }

        if (currency_converted.value === 'dinar') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "KWD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_lira[11]))}</strong>`
            coin_img_two.src = './assets(coins)/kuwait.png'
        }

        if (currency_converted.value === 'rial') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "OMR",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_lira[12]))}</strong>`
            coin_img_two.src = './assets(coins)/rial.png'
        }

        if (currency_converted.value === 'bitcoin') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "XBT",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_lira[13]))}</strong>`
            coin_img_two.src = './assets(coins)/bitcoin.png'
        }
    }

    if (currency_convert_from.value === 'rublo') {
        value_one.innerHTML = `<strong>${(new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB",
            maximumFractionDigits: 2
        }).format(input_number_convert.value))}</strong>`
        coin_img_one.src = './assets(coins)/ruble.png'

        if (currency_converted.value === 'rublo') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("ru-RU", {
                style: "currency",
                currency: "RUB",
                maximumFractionDigits: 2
            }).format(input_number_convert.value))}</strong>`
            coin_img_two.src = './assets(coins)/ruble.png'
        }

        if (currency_converted.value === 'real') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_ruble[0]))}</strong>`
            coin_img_two.src = './assets(coins)/brazilian-real.png'
        }

        if (currency_converted.value === 'dolar') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_ruble[1]))}</strong>`
            coin_img_two.src = './assets(coins)/dollar.png'
        }

        if (currency_converted.value === 'euro') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_ruble[2]))}</strong>`
            coin_img_two.src = './assets(coins)/euro.png'
        }

        if (currency_converted.value === 'libra') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_ruble[3]))}</strong>`
            coin_img_two.src = './assets(coins)/pound-sterling.png'
        }

        if (currency_converted.value === 'iene') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("ja-JP", {
                style: "currency",
                currency: "JPY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_ruble[4]))}</strong>`
            coin_img_two.src = './assets(coins)/yen.png'
        }

        if (currency_converted.value === 'australiano') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-AU", {
                style: "currency",
                currency: "AUD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_ruble[5]))}</strong>`
            coin_img_two.src = './assets(coins)/australian-dollar.png'
        }

        if (currency_converted.value === 'franco') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("de-CH", {
                style: "currency",
                currency: "CHF",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_ruble[6]))}</strong>`
            coin_img_two.src = './assets(coins)/swiss-franc.png'
        }

        if (currency_converted.value === 'canadense') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-CA", {
                style: "currency",
                currency: "CAD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_ruble[7]))}</strong>`
            coin_img_two.src = './assets(coins)/canadian-dollar.png'
        }

        if (currency_converted.value === 'yuan') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("zh-CN", {
                style: "currency",
                currency: "CNY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_ruble[8]))}</strong>`
            coin_img_two.src = './assets(coins)/yuan.png'
        }

        if (currency_converted.value === 'peso') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_ruble[9]))}</strong>`
            coin_img_two.src = './assets(coins)/peso.png'
        }

        if (currency_converted.value === 'lira') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("tr-TR", {
                style: "currency",
                currency: "TRY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_ruble[10]))}</strong>`
            coin_img_two.src = './assets(coins)/turkish-lira.png'
        }

        if (currency_converted.value === 'dinar') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "KWD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_ruble[11]))}</strong>`
            coin_img_two.src = './assets(coins)/kuwait.png'
        }

        if (currency_converted.value === 'rial') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "OMR",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_ruble[12]))}</strong>`
            coin_img_two.src = './assets(coins)/rial.png'
        }

        if (currency_converted.value === 'bitcoin') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "XBT",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_ruble[13]))}</strong>`
            coin_img_two.src = './assets(coins)/bitcoin.png'
        }
    }

    if (currency_convert_from.value === 'dinar') {
        value_one.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "KWD",
            maximumFractionDigits: 2
        }).format(input_number_convert.value))}</strong>`
        coin_img_one.src = './assets(coins)/kuwait.png'

        if (currency_converted.value === 'dinar') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "KWD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value))}</strong>`
            coin_img_two.src = './assets(coins)/kuwait.png'
        }

        if (currency_converted.value === 'real') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_kuwait[0]))}</strong>`
            coin_img_two.src = './assets(coins)/brazilian-real.png'
        }

        if (currency_converted.value === 'dolar') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_kuwait[1]))}</strong>`
            coin_img_two.src = './assets(coins)/dollar.png'
        }

        if (currency_converted.value === 'euro') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_kuwait[2]))}</strong>`
            coin_img_two.src = './assets(coins)/euro.png'
        }

        if (currency_converted.value === 'libra') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_kuwait[3]))}</strong>`
            coin_img_two.src = './assets(coins)/pound-sterling.png'
        }

        if (currency_converted.value === 'iene') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("ja-JP", {
                style: "currency",
                currency: "JPY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_kuwait[4]))}</strong>`
            coin_img_two.src = './assets(coins)/yen.png'
        }

        if (currency_converted.value === 'australiano') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-AU", {
                style: "currency",
                currency: "AUD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_kuwait[5]))}</strong>`
            coin_img_two.src = './assets(coins)/australian-dollar.png'
        }

        if (currency_converted.value === 'franco') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("de-CH", {
                style: "currency",
                currency: "CHF",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_kuwait[6]))}</strong>`
            coin_img_two.src = './assets(coins)/swiss-franc.png'
        }

        if (currency_converted.value === 'canadense') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-CA", {
                style: "currency",
                currency: "CAD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_kuwait[7]))}</strong>`
            coin_img_two.src = './assets(coins)/canadian-dollar.png'
        }

        if (currency_converted.value === 'yuan') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("zh-CN", {
                style: "currency",
                currency: "CNY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_kuwait[8]))}</strong>`
            coin_img_two.src = './assets(coins)/yuan.png'
        }

        if (currency_converted.value === 'peso') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_kuwait[9]))}</strong>`
            coin_img_two.src = './assets(coins)/peso.png'
        }

        if (currency_converted.value === 'lira') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("tr-TR", {
                style: "currency",
                currency: "TRY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_kuwait[10]))}</strong>`
            coin_img_two.src = './assets(coins)/turkish-lira.png'
        }

        if (currency_converted.value === 'rublo') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("ru-RU", {
                style: "currency",
                currency: "RUB",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_kuwait[11]))}</strong>`
            coin_img_two.src = './assets(coins)/ruble.png'
        }

        if (currency_converted.value === 'rial') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "OMR",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_kuwait[12]))}</strong>`
            coin_img_two.src = './assets(coins)/rial.png'
        }

        if (currency_converted.value === 'bitcoin') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "XBT",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_kuwait[13]))}</strong>`
            coin_img_two.src = './assets(coins)/bitcoin.png'
        }
    }

    if (currency_convert_from.value === 'rial') {
        value_one.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "OMR",
            maximumFractionDigits: 2
        }).format(input_number_convert.value))}</strong>`
        coin_img_one.src = './assets(coins)/rial.png'

        if (currency_converted.value === 'rial') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "OMR",
                maximumFractionDigits: 2
            }).format(input_number_convert.value))}</strong>`
            coin_img_two.src = './assets(coins)/rial.png'
        }

        if (currency_converted.value === 'real') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_rial[0]))}</strong>`
            coin_img_two.src = './assets(coins)/brazilian-real.png'
        }

        if (currency_converted.value === 'dolar') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_rial[1]))}</strong>`
            coin_img_two.src = './assets(coins)/dollar.png'
        }

        if (currency_converted.value === 'euro') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_rial[2]))}</strong>`
            coin_img_two.src = './assets(coins)/euro.png'
        }

        if (currency_converted.value === 'libra') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_rial[3]))}</strong>`
            coin_img_two.src = './assets(coins)/pound-sterling.png'
        }

        if (currency_converted.value === 'iene') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("ja-JP", {
                style: "currency",
                currency: "JPY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_rial[4]))}</strong>`
            coin_img_two.src = './assets(coins)/yen.png'
        }

        if (currency_converted.value === 'australiano') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-AU", {
                style: "currency",
                currency: "AUD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_rial[5]))}</strong>`
            coin_img_two.src = './assets(coins)/australian-dollar.png'
        }

        if (currency_converted.value === 'franco') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("de-CH", {
                style: "currency",
                currency: "CHF",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_rial[6]))}</strong>`
            coin_img_two.src = './assets(coins)/swiss-franc.png'
        }

        if (currency_converted.value === 'canadense') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-CA", {
                style: "currency",
                currency: "CAD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_rial[7]))}</strong>`
            coin_img_two.src = './assets(coins)/canadian-dollar.png'
        }

        if (currency_converted.value === 'yuan') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("zh-CN", {
                style: "currency",
                currency: "CNY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_rial[8]))}</strong>`
            coin_img_two.src = './assets(coins)/yuan.png'
        }

        if (currency_converted.value === 'peso') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_rial[9]))}</strong>`
            coin_img_two.src = './assets(coins)/peso.png'
        }

        if (currency_converted.value === 'lira') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("tr-TR", {
                style: "currency",
                currency: "TRY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_rial[10]))}</strong>`
            coin_img_two.src = './assets(coins)/turkish-lira.png'
        }

        if (currency_converted.value === 'rublo') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("ru-RU", {
                style: "currency",
                currency: "RUB",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_rial[11]))}</strong>`
            coin_img_two.src = './assets(coins)/ruble.png'
        }

        if (currency_converted.value === 'dinar') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "KWD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_rial[12]))}</strong>`
            coin_img_two.src = './assets(coins)/kuwait.png'
        }

        if (currency_converted.value === 'bitcoin') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "XBT",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_rial[13]))}</strong>`
            coin_img_two.src = './assets(coins)/bitcoin.png'
        }
    }

    if (currency_convert_from.value === 'bitcoin') {
        value_one.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "XBT",
            maximumFractionDigits: 2
        }).format(input_number_convert.value))}</strong>`
        coin_img_one.src = './assets(coins)/bitcoin.png'

        if (currency_converted.value === 'bitcoin') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "XBT",
                maximumFractionDigits: 2
            }).format(input_number_convert.value))}</strong>`
            coin_img_two.src = './assets(coins)/bitcoin.png'
        }

        if (currency_converted.value === 'real') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_bitcoin[0]))}</strong>`
            coin_img_two.src = './assets(coins)/brazilian-real.png'
        }

        if (currency_converted.value === 'dolar') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_bitcoin[1]))}</strong>`
            coin_img_two.src = './assets(coins)/dollar.png'
        }

        if (currency_converted.value === 'euro') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_bitcoin[2]))}</strong>`
            coin_img_two.src = './assets(coins)/euro.png'
        }

        if (currency_converted.value === 'libra') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_bitcoin[3]))}</strong>`
            coin_img_two.src = './assets(coins)/pound-sterling.png'
        }

        if (currency_converted.value === 'iene') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("ja-JP", {
                style: "currency",
                currency: "JPY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_bitcoin[4]))}</strong>`
            coin_img_two.src = './assets(coins)/yen.png'
        }

        if (currency_converted.value === 'australiano') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-AU", {
                style: "currency",
                currency: "AUD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_bitcoin[5]))}</strong>`
            coin_img_two.src = './assets(coins)/australian-dollar.png'
        }

        if (currency_converted.value === 'franco') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("de-CH", {
                style: "currency",
                currency: "CHF",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_bitcoin[6]))}</strong>`
            coin_img_two.src = './assets(coins)/swiss-franc.png'
        }

        if (currency_converted.value === 'canadense') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("en-CA", {
                style: "currency",
                currency: "CAD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_bitcoin[7]))}</strong>`
            coin_img_two.src = './assets(coins)/canadian-dollar.png'
        }

        if (currency_converted.value === 'yuan') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("zh-CN", {
                style: "currency",
                currency: "CNY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_bitcoin[8]))}</strong>`
            coin_img_two.src = './assets(coins)/yuan.png'
        }

        if (currency_converted.value === 'peso') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_bitcoin[9]))}</strong>`
            coin_img_two.src = './assets(coins)/peso.png'
        }

        if (currency_converted.value === 'lira') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("tr-TR", {
                style: "currency",
                currency: "TRY",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_bitcoin[10]))}</strong>`
            coin_img_two.src = './assets(coins)/turkish-lira.png'
        }

        if (currency_converted.value === 'rublo') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("ru-RU", {
                style: "currency",
                currency: "RUB",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_bitcoin[11]))}</strong>`
            coin_img_two.src = './assets(coins)/ruble.png'
        }

        if (currency_converted.value === 'dinar') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "KWD",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_bitcoin[12]))}</strong>`
            coin_img_two.src = './assets(coins)/kuwait.png'
        }

        if (currency_converted.value === 'rial') {
            value_two.innerHTML = `<strong>${(new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "OMR",
                maximumFractionDigits: 2
            }).format(input_number_convert.value / converted_from_bitcoin[13]))}</strong>`
            coin_img_two.src = './assets(coins)/rial.png'
        }
    }
}

const change_name_country_and_change_flag = () => {

    const flag_one = document.querySelector('.flag-one')
    const flag_two = document.querySelector('.flag-two')
    const name_country_one = document.querySelector('.name-country-one')
    const name_country_two = document.querySelector('.name-country-two')

    if (currency_convert_from.value === "real") {
        flag_one.src = './assets(Flags)/brazil-.png'
        name_country_one.innerHTML = "<strong>Brasil</strong>"
    }

    if (currency_convert_from.value === "dolar") {
        flag_one.src = './assets(Flags)/united-states-of-america.png'
        name_country_one.innerHTML = "<strong>Estados Unidos</strong>"
    }

    if (currency_convert_from.value === "euro") {
        flag_one.src = './assets(Flags)/european.png'
        name_country_one.innerHTML = "<strong>Europa</strong>"
    }

    if (currency_convert_from.value === "libra") {
        flag_one.src = './assets(Flags)/united-kingdom.png'
        name_country_one.innerHTML = "<strong>Reino Unido</strong>"
    }

    if (currency_convert_from.value === "iene") {
        flag_one.src = './assets(Flags)/japan.png'
        name_country_one.innerHTML = "<strong>Japão</strong>"
    }

    if (currency_convert_from.value === "australiano") {
        flag_one.src = './assets(Flags)/australia.png'
        name_country_one.innerHTML = "<strong>Austrália</strong>"
    }

    if (currency_convert_from.value === "franco") {
        flag_one.src = './assets(Flags)/switzerland.png'
        name_country_one.innerHTML = "<strong>Suíça</strong>"
    }

    if (currency_convert_from.value === "canadense") {
        flag_one.src = './assets(Flags)/canada.png'
        name_country_one.innerHTML = "<strong>Canadá</strong>"
    }

    if (currency_convert_from.value === "yuan") {
        flag_one.src = './assets(Flags)/china.png'
        name_country_one.innerHTML = "<strong>China</strong>"
    }

    if (currency_convert_from.value === "peso") {
        flag_one.src = './assets(Flags)/argentina.png'
        name_country_one.innerHTML = "<strong>Argentina</strong>"
    }

    if (currency_convert_from.value === "lira") {
        flag_one.src = './assets(Flags)/turkey.png'
        name_country_one.innerHTML = "<strong>Turquia</strong>"
    }

    if (currency_convert_from.value === "rublo") {
        flag_one.src = './assets(Flags)/russia.png'
        name_country_one.innerHTML = "<strong>Rússia</strong>"
    }

    if (currency_convert_from.value === "dinar") {
        flag_one.src = './assets(Flags)/kuwait.png'
        name_country_one.innerHTML = "<strong>Kuwait</strong>"
    }

    if (currency_convert_from.value === "rial") {
        flag_one.src = './assets(Flags)/oman.png'
        name_country_one.innerHTML = "<strong>Omã</strong>"
    }

    if (currency_convert_from.value === "bitcoin") {
        flag_one.src = './assets(Flags)/bitcoin.png'
        name_country_one.innerHTML = "<strong>Bitcoin</strong>"
    }

    if (currency_converted.value === "real") {
        flag_two.src = './assets(Flags)/brazil-.png'
        name_country_two.innerHTML = "<strong>Brasil</strong>"
    }

    if (currency_converted.value === "dolar") {
        flag_two.src = './assets(Flags)/united-states-of-america.png'
        name_country_two.innerHTML = "<strong>Estados Unidos</strong>"
    }

    if (currency_converted.value === "euro") {
        flag_two.src = './assets(Flags)/european.png'
        name_country_two.innerHTML = "<strong>Europa</strong>"
    }

    if (currency_converted.value === "libra") {
        flag_two.src = './assets(Flags)/united-kingdom.png'
        name_country_two.innerHTML = "<strong>Reino Unido</strong>"
    }

    if (currency_converted.value === "iene") {
        flag_two.src = './assets(Flags)/japan.png'
        name_country_two.innerHTML = "<strong>Japão</strong>"
    }

    if (currency_converted.value === "australiano") {
        flag_two.src = './assets(Flags)/australia.png'
        name_country_two.innerHTML = "<strong>Austrália</strong>"
    }

    if (currency_converted.value === "franco") {
        flag_two.src = './assets(Flags)/switzerland.png'
        name_country_two.innerHTML = "<strong>Suíça</strong>"
    }

    if (currency_converted.value === "canadense") {
        flag_two.src = './assets(Flags)/canada.png'
        name_country_two.innerHTML = "<strong>Canadá</strong>"
    }

    if (currency_converted.value === "yuan") {
        flag_two.src = './assets(Flags)/china.png'
        name_country_two.innerHTML = "<strong>China</strong>"
    }

    if (currency_converted.value === "peso") {
        flag_two.src = './assets(Flags)/argentina.png'
        name_country_two.innerHTML = "<strong>Argentina</strong>"
    }

    if (currency_converted.value === "lira") {
        flag_two.src = './assets(Flags)/turkey.png'
        name_country_two.innerHTML = "<strong>Turquia</strong>"
    }

    if (currency_converted.value === "rublo") {
        flag_two.src = './assets(Flags)/russia.png'
        name_country_two.innerHTML = "<strong>Rússia</strong>"
    }

    if (currency_converted.value === "dinar") {
        flag_two.src = './assets(Flags)/kuwait.png'
        name_country_two.innerHTML = "<strong>Kuwait</strong>"
    }

    if (currency_converted.value === "rial") {
        flag_two.src = './assets(Flags)/oman.png'
        name_country_two.innerHTML = "<strong>Omã</strong>"
    }

    if (currency_converted.value === "bitcoin") {
        flag_two.src = './assets(Flags)/bitcoin.png'
        name_country_two.innerHTML = "<strong>Bitcoin</strong>"
    }convert_values()
}

input_number_convert.addEventListener('change', convert_values)

currency_convert_from.addEventListener('change', change_name_country_and_change_flag)

currency_converted.addEventListener('change', change_name_country_and_change_flag)

