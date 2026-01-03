/**
 * Calculates the years of experience based on start date
 * @param {number} startYear - The starting year (e.g., 2023)
 * @param {number} startMonth - The starting month (0-11, where 0 = January, 3 = April)
 * @returns {number} - Experience in years with one decimal place (e.g., 2.8)
 */
export function calculateExperience(startYear, startMonth) {
  const currentDate = new Date();
  const startDate = new Date(startYear, startMonth, 1); // First day of the start month
  
  // Calculate the difference in milliseconds
  const diffTime = currentDate - startDate;
  
  // Convert to years
  const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25); // Account for leap years
  
  // Round to one decimal place
  return Math.round(diffYears * 10) / 10;
}

/**
 * Formats experience as a string with "years" suffix
 * @param {number} startYear - The starting year
 * @param {number} startMonth - The starting month (0-11)
 * @returns {string} - Formatted experience string (e.g., "2.8 years")
 */
export function getFormattedExperience(startYear, startMonth) {
  const experience = calculateExperience(startYear, startMonth);
  return `${experience} years`;
}
