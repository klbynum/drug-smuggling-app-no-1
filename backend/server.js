const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(express.json());

// Optional root route to remove the error
app.get('/', (req, res) => {
  res.send('API is running...');
});

const reportsFile = './reports/reports.json'

// Reports route for all reports
app.get('/reports', (req, res) => {
  fs.readFile(reportsFile, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read reports' });
    }
    try {
        const reports = JSON.parse(data);
        res.json(reports);
    } catch (parseErr) {
        console.error('Failed to parse reports: ', parseErr);
        res.status(500).json({ error: 'Invalid JSON format om reports file' });
    }
  });
});

// POST a new report
app.post('/reports', (req, res) => {
    const newReport = req.body;
    console.log('Received report:', newReport);

    fs.readFile(reportsFile, 'utf8', (err, data) => {
        let reports = [];

        if (!err && data) {
            try {
                reports = JSON.parse(data);
            } catch (parseError) {
                console.error('Error parsing JSON: ', parseError);
            }
        }
        reports.push(newReport);

        fs.writeFile(reportsFile, JSON.stringify(reports, null, 2), (writeErr) => {
            if (writeErr) {
                console.error('Failed to write report:', writeErr);
                return res.status(500).json({ error: 'Failed to save report' });
            }
            res.status(201).json({ message: 'Report saved successfully' });
        });
    });
});

// DELETE a report by ID
app.delete('/reports/:id', (req, res) => {
  const reportId = req.params.id;

  fs.readFile(reportsFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Failed to read reports:', err);
      return res.status(500).json({ error: 'Failed to read reports' });
    }

    let reports;
    try {
      reports = JSON.parse(data);
    } catch (parseErr) {
      console.error('Failed to parse reports:', parseErr);
      return res.status(500).json({ error: 'Invalid JSON format in reports file' });
    }

    const filteredReports = reports.filter((r) => r.id.toString() !== reportId);

    if (filteredReports.length === reports.length) {
      return res.status(404).json({ error: 'Report not found' });
    }

    fs.writeFile(reportsFile, JSON.stringify(filteredReports, null, 2), (writeErr) => {
      if (writeErr) {
        console.error('Failed to write updated reports:', writeErr);
        return res.status(500).json({ error: 'Failed to delete report' });
      }

      res.status(200).json({ message: 'Report deleted successfully' });
    });
  });
});

app.use((req, res) => {
    console.log(`Unhandled request: ${req.method} ${req.originalUrl}`);
    res.status(404).send('Not Found');
  });
  
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});