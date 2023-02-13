import { useRouter } from "next/router";
import Header from "../../components/Header";
// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default ({ data }) => {
  const router = useRouter();

  function handleClicked(
    title,
    images,
    details,
    price,
    currency,
    location,
    isOwner,
    statuss,
    createdAt
  ) {
    router.push({
      pathname: "/adsproduct",
      query: {
        title: title,
        images: images,
        details: details,
        price: price,
        currency: currency,
        location: location,
        isOwner: isOwner,
        status: statuss,
        createdAt: createdAt,
      },
    });
  }
  return (
    <>

    <Header/>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 md:px-24 px-24">
        {data.map((item) => {
          if (item.images[0]) {
            return (
              <>
                <div
                  key={item._id}
                  className="w-48 h-56 tablet:w-60 tablet:h-64 relative flex flex-col"
                  onClick={() =>
                    handleClicked(
                      item.title,
                      item.images,
                      item.details,
                      item.price,
                      item.currency,
                      item.location,
                      item.isOwner,
                      item.status,
                      item.createdAt
                    )
                  }
                >
                  <img
                    className="snap-start bg-origin-padding border-none cursor-pointer w-40 h-40 tablet:w-48 tablet:h-48 object-fill pt-10 pb-2"
                    src={item.images[0]}
                    alt={item._id}
                    width={200}
                    height={200}
                    key={item._id}
                  ></img>

                  <div className="text-sm w-40">{item.title}</div>
                </div>
              </>
            );
          }
        })}
      </div>
    </>
  );
};
export const getServerSideProps = async (context) => {
  const text = context.query.text;
  const res = await fetch(`http://almalk.org:3000/search/${text}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
