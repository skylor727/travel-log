import * as userService from "../../utilities/users-service";

export default function OrderHistoryPage() {
  const handleCheckToken = async (evt) => {
    const expDate = await userService.checkToken();
  };

  return (
    <>
      <h1>Order History Page</h1>
      <button onClick={handleCheckToken}>Check Token Time</button>
    </>
  );
}
