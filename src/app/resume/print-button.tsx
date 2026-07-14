export function DownloadButton() {
  return (
    <a href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/Jamal_Yaqoob_Resume.pdf`} download>
      Download résumé PDF
    </a>
  );
}
