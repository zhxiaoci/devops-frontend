import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Link, Chip } from '@mui/material';
import { useGithubRepositories } from '../../hooks/useGithubRepositories';
import type { Repository } from '../../types/github';

const Dashboard: React.FC = () => {
  const { data: repos, isLoading, error } = useGithubRepositories();

  if (isLoading) {
    return (
      <Container>
        <Typography>Loading repositories...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography color="error">Error loading repositories</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          GitHub Repositories
        </Typography>
        <Grid container spacing={3}>
          {repos?.map((repo: Repository) => (
            <Grid item xs={12} md={6} key={repo.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="h2">
                    <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
                      {repo.name}
                    </Link>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {repo.description}
                  </Typography>
                  <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                    {repo.language && (
                      <Chip label={repo.language} size="small" />
                    )}
                    <Chip label={`★ ${repo.stargazers_count}`} size="small" />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Dashboard; 