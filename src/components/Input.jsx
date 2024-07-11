export default function Input({
    placeholder,
    typeInput = "text",
    error,
    value,
    onChange,
    name,
    text
  }) {
    return (
      <>
          <input
              placeholder={placeholder}
              type={typeInput}
              className={`w-full ${text && `text-${text}`} px-4 py-2 bg-[#f3f5f2] text-ms-gray border hover:shadow-[0px_0px_6px_rgba(174,143,78,0.4)] rounded-full
                placeholder:text-[0.9rem] placeholder:text-[#b0afad] placeholder:font-light focus:outline-none transition duration-200 ${error
                  ? 'border-[#E84A4A] focus:ring-red-200'
                  : 'border-ms-gold focus:border-ms-green focus:bg-[#f3f5f2] focus:shadow-[0px_0px_6px_rgba(49,161,114,0.4)]'}`}
              value={value}
              onChange={onChange}
              name={name}
  
          />
          {error ? <small className="text-red-500">{error}</small> : null}
      </>
    )
  }
  