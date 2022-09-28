import { useContext } from 'react';
import { HouseContext } from '../../context/HouseContext';

const PropertyTypeFilter = () => {

  const {houses, property, setProperty, properties} = useContext(HouseContext);

  const propertyHandler = (event)=> {
    setProperty(event.target.value);
  }

  return (
    <Form>
      <label my="-1" fontWeight="bold">
        Property Type
      </label>
      <Select placeholder='select type'>
        {
          properties.map((type, index)=> {
            return <option key={index} onClick={propertyHandler}>{type}</option>
          })
        }
      </Select>
    </Form>
  );
};

export default PropertyTypeFilter;