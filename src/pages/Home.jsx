const Home = () => {
  return (
    <div className="max-w-[1980px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        {/* Overlay */}

        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/50 flex flex-row justify-between py-6 sm:py-15 px-4">
          <h1 className="text-5xl">
            Quality Pet Care <br />
            Made Easy.
          </h1>
          <div className="bg-gray-100 w-[320px] h-[450px] rounded-lg py-8 px-6">
            {/* Form */}
            <form className="mb-0 space-y-3">
              {/* First Name */}
              <div>
                {/* Label */}
                <label for="fname" className="block text-black font-medium">
                  Name
                </label>
                {/* Input */}
                <div className="mt-1">
                  <input
                    type="text" id="fname" name="fname" required
                    className="form-input"
                  />
                </div>
              </div>
              <div>
                {/* Last Name */}
                <label for="lname" className="block text-black font-medium">Last Name</label>
                <div className="mt-1">
                  <input 
                    type="text" id="lname" name="lname" required 
                    className="form-input" />
                </div>
              </div>
              {/* Email */}
              <div>
                <label for="email" className="block text-black font-medium">Email</label>
                <div className="mt-1">
                  <input 
                    type="email" id="email" name="email" required 
                    className="form-input" />
                </div>
              </div>
              {/* Address */}
              <div>
                <label for="address" className="block text-black font-medium">Address</label>
                <div className="mt-1">
                  <input 
                    type="email" id="email" name="email" required 
                    className="form-input" />
                </div>
              </div>
              {/* Submit */}
              <input type="submit" value="Book!"
               className="w-full py-2 my-10 bg-yellow-300 rounded-full text-black
               hover:bg-yellow-500 active:bg-yellow-600"/>
            </form>
          </div>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="https://images.unsplash.com/photo-1494947665470-20322015e3a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
      </div>
    </div>
  );
};

export default Home;
