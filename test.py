# test_imports.py
try:
    import nltk
    from nltk.tokenize import word_tokenize
    from sklearn.model_selection import train_test_split

    print("NLTK and scikit-learn imported successfully!")
except ImportError as e:
    print(f"Import error: {e}")
