import Singleads from '../components/Singleads';

const Wishlist = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
      {cards.map((card) => (
        <Singleads
          key={card.id}
          imageUrl={card.imageUrl}
          title={card.title}
          price={card.price}
          id={card.id}
        />
      ))}
    </div>
  );
};

export default Wishlist;
export const getServerSideProps = async (context) => {
 
    const cards = [
        {
          id: 1,
          title: 'Card 1',
          price: '$10',
          imageUrl: '/Images/1.webp',
        },
        {
          id: 2,
          title: 'Card 2',
          price: '$20',
          imageUrl: '/Images/2.webp',
        },
        {
          id: 3,
          title: 'Card 3',
          price: '$15',
          imageUrl: '/Images/3.webp',
        },
        {
          id: 4,
          title: 'Card 4',
          price: '$12',
          imageUrl: '/Images/4.webp',
        },
        {
          id: 5,
          title: 'Card 5',
          price: '$18',
          imageUrl: '/Images/1.webp',
        },
        {
          id: 6,
          title: 'Card 6',
          price: '$25',
          imageUrl: '/Images/2.webp',
        },
        {
          id: 7,
          title: 'Card 7',
          price: '$22',
          imageUrl: '/Images/3.webp',
        },
        {
          id: 8,
          title: 'Card 8',
          price: '$30',
          imageUrl: '/Images/4.webp',
        },
        {
          id: 9,
          title: 'Card 9',
          price: '$28',
          imageUrl: '/Images/1.webp',
        },
      ];
    return {
      props: {
        cards
      },
      
    };
  };
  