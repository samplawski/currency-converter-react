import { useRatesData } from "./useRatesData.js";
import { useCurrencyLogic } from "./useCurrencyLogic.js";
import StyledBody from "./Body";
import Table from "./Table";
import Converter from "./Converter";
import Footer from "./Footer";
import { StatusWrapper, LoadingStatus, ErrorStatus } from "./styledStatus.js";


function App() {
  const rates = useRatesData();
  const {
    amountPLN,
    targetCurrencyCode,
    calculatedOutput,
    handleAmountChange,
    handleCurrencyChange,
    handleFormSubmit,
    handleReset,
    tableCurrencies,
  } = useCurrencyLogic(rates.data);

  return (
    <StyledBody>
      {rates.loading ? (
        <StatusWrapper>
          <LoadingStatus>
            Moment... pobieram aktualne kursy walut z serwera. ⌚
          </LoadingStatus>
        </StatusWrapper>
      ) : rates.error ? (
        <StatusWrapper>
          <ErrorStatus>
            Hmm... Coś poszło nie tak 🤯 Sprawdź, czy masz połączenie z
            internetem. Jeśli masz... to wygląda na to, że to nasza wina. Możesz
            spróbować później? 😜
          </ErrorStatus>
        </StatusWrapper>
      ) : (
        <>
          <Table currencies={tableCurrencies} ratesDate={rates.date} />
          <Converter
            currencies={tableCurrencies}
            amountPLN={amountPLN}
            onAmountChange={handleAmountChange}
            calculatedOutput={calculatedOutput}
            onCurrencyChange={handleCurrencyChange}
            targetCurrencyCode={targetCurrencyCode}
            onReset={handleReset}
            onFormSubmit={handleFormSubmit}
            rates={rates.data}
          />
        </>
      )}
      <Footer />
    </StyledBody>
  );
}

export default App;
