
export default function SearchBold({search, data}) {
  const findIndex = data?.indexOf(search);

  if (findIndex === -1) {
    return data;
  }
  const before = data?.slice(0, findIndex);
  const match = data?.slice(findIndex, findIndex + search.length);
  const after = data?.slice(findIndex + search.length);

  return (
    <span>
      {before}
      <span className="font-semibold text-ms-green">{match}</span>
      {after}
    </span>
  );
}
