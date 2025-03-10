/* eslint-disable max-len */
/**
 * TODO:    - Remove Border CSS from MapContainer when mapping implemented
 *          - Implement Mapping Props
 *          - Have table items link to another view to display results
 *
 * @summary - Search by BC Services View container. Displays map data for users to see locations,
 *          - Users can filter by services that will filter the maps markers.
 *          - Only displays locations in range of user settings
 *          - Map does not render offline
 * @author  LocalNewsTV, Dallas Richmond
 */
/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import { ListItems, ServiceListItem, headers } from '../../components/lists';
import { SearchBar } from '../../components/common';
import { Mapping } from '../../components/utility';
import SingleLocation from '../../Type/SingleLocation';
import useAppService from '../../services/app/useAppService';
import { localStorageKeyExists } from '../../utils/AppLocalStorage';
import constants from '../../constants/Constants';
import CalcDistance from '../../utils/CalcDistance';
import {
  ContentContainer,
  MapContainer,
  ViewContainer,
  ServiceListContainer,
  StyledP,
} from './bcservices.styles';
import { locationContent } from '../../content/content';

export default function BCServices() {
  const [searchQuery, setSearchQuery] = useState('');
  const { state } = useAppService();
  const { lang } = state.settings;
  const services = state.appData?.data ? state.appData?.data.allServices : [];
  const locations = state.appData?.data ? [
    ...state.appData.data.serviceBCLocations,
    ...state.appData.data.ICBCLocations,
    ...state.appData.data.healthBCLocations,
  ] : [];
  const geolocationKnown = localStorageKeyExists(constants.CURRENT_LOCATION_KEY);
  const locationRange = state.settings.location_range;

  const filteredServiceSearch = services.filter((item : string) => item.toLowerCase().match(`${searchQuery.toLowerCase().trim()}`));

  const filteredLocationSearch = locations.filter((location : SingleLocation) => {
    if (geolocationKnown) {
      const locationDistance = CalcDistance({ itemData: location, currentLocation: state.currentLocation });
      if (parseFloat(locationDistance) <= locationRange) {
        return filteredServiceSearch.some((service : string) => location.services.includes(service));
      }
    }
    return false;
  });

  return (
    <ViewContainer>
      <ContentContainer>
        {!state.settings.offline_mode && navigator.onLine
          ? (
            <Mapping
              locations={filteredLocationSearch}
              currentLocation={state.currentLocation}
            />
          )
          : (
            <MapContainer>
              <StyledP>
                {locationContent.unavailable[lang]}
              </StyledP>
            </MapContainer>
          )}
        <ServiceListContainer>
          <SearchBar
            query={searchQuery}
            setUseState={setSearchQuery}
            handleClear={() => setSearchQuery('')}
            border={false}
            borderRadius={false}
          />
          <ListItems headers={headers}>
            {filteredServiceSearch.map((data: string, index: number) => (
              <ServiceListItem key={index} service={data} />
            ))}
          </ListItems>
        </ServiceListContainer>
      </ContentContainer>
    </ViewContainer>
  );
}
