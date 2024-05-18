const calculateTimeDifference = (creationTime: string): string => {
  const diffMs = Date.now() - new Date(creationTime).getTime();

  const hours = Math.floor(diffMs / (1000 * 60 * 60)) % 24;
  const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
  const seconds = Math.floor((diffMs / 1000) % 60);

  return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")} Minutes`;
};
export default calculateTimeDifference