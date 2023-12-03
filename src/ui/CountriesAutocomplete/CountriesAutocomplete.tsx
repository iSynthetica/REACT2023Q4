import { FormEvent, ForwardedRef, forwardRef, useState } from 'react';
import styles from '../UncontrolledInput/UncontrolledInput.module.css';
import autocompleteStyles from './CountriesAutocomplete.module.css';
import { countries } from '../../data/countries';

interface Props {
  error?: string;
}

const CountriesAutocomplete = forwardRef(
  ({ error }: Props, ref: ForwardedRef<HTMLInputElement>) => {
    const [countryCode, setCountryCode] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([
      'Afghanistan (AF)',
      'Albania (AL)',
      'Algeria (DZ)',
      'American Samoa (AS)',
    ]);

    const getGroupClassName = () =>
      `${styles.formGroup} ${autocompleteStyles.autocompleteFormGroup}`;

    const getClassName = () =>
      error
        ? `${styles.formControl} ${styles.formControlErrored}`
        : styles.formControl;

    const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
      const value = event.currentTarget.value;
      if (value.trim()) {
        setInputValue(value);

        // Filter suggestions based on input value
        const filteredSuggestions = Object.values(countries).filter(
          (country: string) =>
            country.toLowerCase().includes(value.toLowerCase())
        );

        setSuggestions(filteredSuggestions);
      } else {
        setInputValue('');
        setSuggestions([]);
      }
    };
    const handleSuggestionClick = (selectedSuggestion: string) => {
      setInputValue(selectedSuggestion);
      const countriesArray = Object.entries(countries);
      const selectedCountry = countriesArray.find(
        ([, country]) => country === selectedSuggestion
      );

      if (selectedCountry) {
        setCountryCode(selectedCountry[0]);
      }
      setSuggestions([]);
    };

    return (
      <div className={getGroupClassName()}>
        <label className={`${styles.formLabel}`} htmlFor="country">
          Country
        </label>
        <input ref={ref} defaultValue={countryCode} type="hidden" />
        <input
          value={inputValue}
          type="search"
          className={getClassName()}
          id="country"
          placeholder="Start typing country name"
          onChange={handleInputChange}
        />
        {suggestions.length > 0 && (
          <ul className={autocompleteStyles.autocompleteSuggestions}>
            {suggestions.map((suggestion, index) => (
              <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion}
              </li>
            ))}
          </ul>
        )}
        {error && <p className={styles.formError}>{error}</p>}
      </div>
    );
  }
);

export default CountriesAutocomplete;
