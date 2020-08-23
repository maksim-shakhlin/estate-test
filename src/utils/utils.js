const flats = [
  {
    type: 'flat',
    id: 1,
    attributes: {
      title: '3-х комнатная на Минской',
      rooms: 3,
      address: {
        city: 'Tyumen',
        street: 'Минская',
        house: '3a',
        room: '123',
      },
      area: 134,
      unit: 'квм',
    },
    relationships: {
      type: 'agent',
      id: 2,
      attributes: {
        first_name: 'Василий',
        last_name: 'Дроздов',
        middle_name: 'Михайлович',
      },
    },
  },
  {
    type: 'flat',
    id: 2,
    attributes: {
      title: '1 комнатная на Барабаинской',
      rooms: 2,
      address: {
        city: 'Tyumen',
        street: 'Барабинская',
        house: '12',
        room: '45',
      },
      area: 34,
      unit: 'квм',
    },
    relationships: {
      type: 'agent',
      id: 10,
      attributes: {
        first_name: 'Михаил',
        last_name: 'Иванов',
        middle_name: 'Демидович',
      },
    },
  },
  {
    type: 'flat',
    id: 3,
    attributes: {
      title: 'Квартира Ленина',
      rooms: 4,
      address: {
        city: 'Tyumen',
        street: 'Ленина',
        house: '134',
        room: '24',
      },
      area: 134,
      unit: 'квм',
    },
    relationships: {
      type: 'agent',
      id: 44,
      attributes: {
        first_name: 'Степан',
        last_name: 'Карачаев',
        middle_name: 'Иванович',
      },
    },
  },
];

const dict = {
  type: { flat: 'квартира', studio: 'студия', apartments: 'апартаменты' },
  agent: { agent: 'риелтор', owner: 'владелец' },
  unit: { квм: ['м', 2] },
};

export { flats, dict };

export function getAddresString(data) {
  const res = [];
  data.street && res.push(`ул. ${data.street}`);
  data.house && res.push(`д. ${data.house}`);
  data.room && res.push(`кв. ${data.room}`);
  return res.join(', ');
}

export function getNameString(data) {
  const res = [];
  data.first_name && res.push(data.first_name);
  data.middle_name && res.push(data.middle_name);
  data.last_name && res.push(data.last_name[0] + '.');
  return res.join(' ');
}

export function handleError(error) {
  console.error(error);
}
