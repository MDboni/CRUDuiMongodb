import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import Swal from "sweetalert2";

const CoffeeCard = ({ user }) => {
  const { name, chef, supplier, taste, category, details, photo, _id } = user;

  const DeletHandel = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5400/users/${id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Coffee has been deleted.",
                "success"
              );
            }
          })
          .catch(error => {
            console.error(error);
            Swal.fire(
              "Error!",
              "Something went wrong.",
              "error"
            );
          });
      }
    });
  };

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-sm">
        <figure>
          <img src={photo} alt={name} />
        </figure>
        <div className="card-body grid grid-cols-2">
          <div>
            <h2 className="card-title">{name}</h2>
            <p>{chef}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="join join-vertical space-y-2">
              <button className="btn join-item text-3xl"><FaEye /></button>
              <button className="btn join-item">Update</button>
              <button
                className="btn join-item text-3xl"
                onClick={() => DeletHandel(_id)}
              >
                <MdDelete />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoffeeCard;
