import React, {useState } from "react";

function CustomersList() {
  const [pageTitle] = useState("Customers");
  const [customersCount, setCustomersCount] = useState(5);
  
  const AddressData = (city) => {
    return {
      city: city,
    };
  };

  const CustomerData = (id, name, phone, address, photo) => {
    return {
      id: id,
      name: name,
      phone: phone,
      address: address,
      photo: photo,
    };
  };
  const data = [
    CustomerData(
      1,
      "Scott",
      "123-456",
      AddressData("São Paulo"),
      "http://picsum.photos/id/1010/60"
    ),
    CustomerData(
      2,
      "Jones",
      "133-234",
      AddressData("Campinas"),
      "http://picsum.photos/id/1011/60"
    ),
    CustomerData(
      3,
      "Allen",
      "423-446",
      AddressData("Maringá"),
      "http://picsum.photos/id/1012/60"
    ),
    CustomerData(
      4,
      "James",
      "863-236",
      AddressData("Sorocaba"),
      "http://picsum.photos/id/1013/60"
    ),
    CustomerData(
      5,
      "John",
      null,
      AddressData("Curitiba"),
      "http://picsum.photos/id/1014/60"
    ),
  ];

  const [dataCust, setDataCust] = useState(data);
 
  const onRefreshClick = () => {
    setCustomersCount(7);
  };

  const getPhoneToRender = (phone) => {
    if (phone) return phone;
    else {
      return <div className="bg-warning p-2 text-center">Sem Telefone</div>;
    }
  };

  const getCustomerRow = () => {
    return dataCust.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <div>
              <img src={cust.photo} alt="Customer"/>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => {
                  onChangePictureClick(index);
                }}
              >
                Change picture
              </button>
            </div>
          </td>
          <td>{cust.name}</td>
          <td>{getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
        </tr>
      );
    });
  };
  
  const onChangePictureClick = (index) => {
    const custArr = dataCust;
    custArr[index].photo = "http://picsum.photos/id/104/60";
    setDataCust([...custArr]);
    console.log("mudou o data", dataCust);
  };

  return (
    <div>
      <h4 className="m-1 p-1">
        {pageTitle}
        <span className="badge bg-secondary m-2">{customersCount}</span>
        <button className="btn btn-info" onClick={onRefreshClick}>
          Refresh
        </button>
      </h4>

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Foto</th>
            <th>Nome do cliente</th>
            <th>Telefone</th>
            <th>Cidade</th>
          </tr>
        </thead>
        <tbody>{getCustomerRow()}</tbody>
      </table>
    </div>
  );
}
export default CustomersList;
