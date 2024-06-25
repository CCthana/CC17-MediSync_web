export default function Input({
    placeholder,
    typeInput = "text",
    error,
    value,
    onChange,
    name
  }) {
    return (
      <>
          <input
              placeholder={placeholder}
              type={typeInput}
              className={`w-full h-11 px-3 py-1.5 bg-[#ecefeb] text-[#767676] border hover:border-ms-green rounded-full placeholder:text-[0.8rem] placeholder:font-light focus:outline-none transition duration-200 ${error
                  ? 'border-[#E84A4A] focus:ring-red-200'
                  : 'border-ms-gold focus:border-ms-green focus:bg-[#F0F4EE] focus:shadow-[0px_0px_6px_rgba(49,161,114,0.4)]'}`}
              value={value}
              onChange={onChange}
              name={name}
  
          />
          {error ? <small className="text-red-500">{error}</small> : null}
      </>
    )
  }
  