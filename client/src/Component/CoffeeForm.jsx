import Swal from 'sweetalert2'

const CoffeeForm = () => {

    const FHandel = e =>{
        e.preventDefault()

        const name = e.target.name.value ;
        const chef = e.target.chef.value ;
        const supplier = e.target.supplier.value ;
        const taste = e.target.taste.value ;
        const category = e.target.category.value ;
        const details = e.target.details.value ;
        const photo = e.target.photo.value ;
        const result = {name,chef,supplier,taste,category,details,photo}
        console.log(result);

       fetch('http://localhost:5400/users', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
        },
          body: JSON.stringify(result)   
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                title: 'Success!',
                text: 'Coffee added successfully!',
                icon: 'success',
                confirmButtonText: 'OK'
              })
              e.target.reset();
            }

        })
  

        
    }
  return (
    <section className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="max-w-3xl mx-auto border rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Add A New Coffee</h2>
        <p className="text-center text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus id officia saepe aliquid nostrum labore.
        </p>
        <form onSubmit={FHandel}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <fieldset className="flex flex-col">
              <label className="mb-2 font-medium">Name</label>
              <input
                type="text"
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter coffee name"
                name="name"
              />
            </fieldset>
            <fieldset className="flex flex-col">
              <label className="mb-2 font-medium">Chef</label>
              <input
                type="text"
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter coffee chef"
                name="chef"
              />
            </fieldset>
            <fieldset className="flex flex-col">
              <label className="mb-2 font-medium">Supplier</label>
              <input
                type="text"
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter coffee supplier"
                name="supplier"
              />
            </fieldset>
            <fieldset className="flex flex-col">
              <label className="mb-2 font-medium">Taste</label>
              <input
                type="text"
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter coffee taste"
                name="taste"
              />
            </fieldset>
            <fieldset className="flex flex-col">
              <label className="mb-2 font-medium">Category</label>
              <input
                type="text"
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter coffee category"
                name="category"
              />
            </fieldset>
            <fieldset className="flex flex-col">
              <label className="mb-2 font-medium">Details</label>
              <textarea
                rows="3"
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter coffee details"
                name="details"
              />
            </fieldset>
            <fieldset className="col-span-full flex flex-col">
              <label className="mb-2 font-medium">Photo Url</label>
              <input
                type="text"
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Photo url"
                name="photo"
              />
            </fieldset>
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-gray-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
          >
            Add Coffee
          </button>
        </form>
      </div>
    </section>
  )
}

export default CoffeeForm
